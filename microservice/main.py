from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import json
import os
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = FastAPI(title="AnimeLens API", description="API for anime movie prediction from images")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
MODEL_PATH = os.path.join("model", "saved_model")
logger.info(f"Attempting to load model from: {os.path.abspath(MODEL_PATH)}")
logger.info(f"TensorFlow version: {tf.__version__}")

# Enable TensorFlow compatibility mode
tf.keras.backend.set_floatx('float32')
tf.keras.backend.set_image_data_format('channels_last')

try:
    if not os.path.exists(MODEL_PATH):
        raise FileNotFoundError(f"Model directory not found at {MODEL_PATH}")
    
    logger.info("Model directory exists, attempting to load...")
    
    # Load the model from saved_model directory
    model = tf.saved_model.load(MODEL_PATH)
    logger.info("Model loaded successfully")
    
    # Get the prediction function
    predict_fn = model.signatures['serving_default']
    logger.info("Prediction function loaded successfully")
except Exception as e:
    logger.error(f"Error loading model: {str(e)}")
    model = None
    predict_fn = None

# Load class names
try:
    with open("model/class_names.json", "r") as f:
        class_names = json.load(f)
    logger.info(f"Loaded {len(class_names)} class names")
except Exception as e:
    logger.warning(f"Error loading class names: {str(e)}")
    # Fallback class names if file doesn't exist
    class_names = [
        "Hello World",
        "Josee, the Tiger and the Fish",
        "Natsu e no Tunnel Sayonara no Deguchi",
        "The Garden of Words",
        "Your Name"
    ]
    logger.info("Using fallback class names")

def preprocess_image(image_bytes):
    """Preprocess the image for model prediction"""
    try:
        # Convert bytes to PIL Image
        image = Image.open(io.BytesIO(image_bytes))
        
        # Convert to RGB if image is in different mode
        if image.mode != 'RGB':
            image = image.convert('RGB')
        
        # Resize image to match model input size (224x224)
        image = image.resize((224, 224))
        
        # Convert to numpy array
        image_array = np.array(image)
        
        # Normalize pixel values
        image_array = image_array.astype('float32') / 255.0
        
        # Add batch dimension
        image_array = np.expand_dims(image_array, axis=0)
        
        return image_array
    except Exception as e:
        logger.error(f"Error preprocessing image: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Error processing image: {str(e)}")

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to AnimeLens API",
        "endpoints": {
            "/predict": "POST - Upload an image to predict anime movie"
        },
        "status": {
            "model_loaded": model is not None,
            "num_classes": len(class_names)
        }
    }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """Predict anime movie from uploaded image"""
    logger.info(f"Received prediction request for file: {file.filename}")
    
    if model is None or predict_fn is None:
        logger.error("Model not loaded")
        raise HTTPException(status_code=500, detail="Model not loaded")
    
    try:
        contents = await file.read()
        logger.info(f"Read file of size: {len(contents)} bytes")
        
        processed_image = preprocess_image(contents)
        logger.info(f"Processed image shape: {processed_image.shape}")
        
        # Convert to tensor
        input_tensor = tf.convert_to_tensor(processed_image)
        
        # Make prediction
        predictions = predict_fn(input_tensor)
        
        # Get the output tensor
        output_key = list(predictions.keys())[0]
        predictions_array = predictions[output_key].numpy()
        
        logger.info(f"Raw predictions shape: {predictions_array.shape}")
        
        # Get top 5 predictions
        top_indices = np.argsort(predictions_array[0])[-5:][::-1]
        results = []
        for idx in top_indices:
            results.append({
                "movie": class_names[idx],
                "confidence": float(predictions_array[0][idx])
            })
        
        logger.info(f"Top prediction: {results[0]}")
        return {
            "success": True,
            "predictions": results
        }
    except Exception as e:
        logger.error(f"Error during prediction: {str(e)}")
        return {
            "success": False,
            "error": str(e)
        }

if __name__ == "__main__":
    import uvicorn
    logger.info("Starting AnimeLens API server...")
    uvicorn.run(app, host="127.0.0.1", port=8000)

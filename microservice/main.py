import os
import numpy as np
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import tensorflow as tf
from tensorflow import keras
import io

app = FastAPI(
    title="AnimeLens API",
    description="API for anime movie image classification",
    version="1.0.0"
)

# Add CORS middleware with more specific configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
MODEL_PATH = "model/animelens_model.h5"
model = keras.models.load_model(MODEL_PATH)

# Print model information
print("Model output shape:", model.output_shape)
print("Number of classes in model:", model.output_shape[-1])

# Define class names based on the anime movies
CLASS_NAMES = [
    "Fireworks, Should We See It from the Side or the Bottom",
    "Hello World",
    "The Garden of Words",
    "Your Name",
    "Summer Ghost",
    "Grave of the Fireflies",
    "Josee, the Tiger and the Fish",
    "A Whisker Away",
    "A Silent Voice",
    "The Anthem of the Heart"
]

# Verify number of classes matches model output
if len(CLASS_NAMES) != model.output_shape[-1]:
    raise ValueError(f"Number of classes ({len(CLASS_NAMES)}) does not match model output shape ({model.output_shape[-1]})")

def preprocess_image(img):
    # Resize image to match model's expected sizing
    img = img.resize((224, 224))
    # Convert to array and preprocess
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize
    return img_array

@app.get("/")
async def root():
    return {
        "message": "Welcome to AnimeLens API",
        "available_classes": CLASS_NAMES
    }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Read and validate image
        contents = await file.read()
        img = Image.open(io.BytesIO(contents))
        
        # Preprocess image
        processed_img = preprocess_image(img)
        
        # Make prediction
        predictions = model.predict(processed_img)
        
        # Get top 3 predictions
        top_3_idx = np.argsort(predictions[0])[-3:][::-1]
        results = []
        
        for idx in top_3_idx:
            results.append({
                "movie": CLASS_NAMES[idx],
                "confidence": float(predictions[0][idx])
            })
        
        return {
            "success": True,
            "predictions": results
        }
        
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

import requests
import json

# API base URL
BASE_URL = "http://localhost:8000"

def test_root_endpoint():
    """Test the root endpoint"""
    response = requests.get(BASE_URL)
    print("\nTesting root endpoint:")
    print(f"Status Code: {response.status_code}")
    print("Response:", json.dumps(response.json(), indent=2))

def test_predict_endpoint(image_path):
    """Test the predict endpoint with an image"""
    print(f"\nTesting predict endpoint with image: {image_path}")
    
    # Prepare the image file
    with open(image_path, 'rb') as img_file:
        files = {'file': (image_path, img_file, 'image/jpeg')}
        
        # Make the request
        response = requests.post(f"{BASE_URL}/predict", files=files)
        
        print(f"Status Code: {response.status_code}")
        print("Response:", json.dumps(response.json(), indent=2))

if __name__ == "__main__":
    # Test root endpoint
    test_root_endpoint()
    
    # Test predict endpoint with test image
    test_predict_endpoint("test_image.jpeg") 
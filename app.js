// Access DOM elements
const cameraPreview = document.getElementById('camera-preview');
const captureBtn = document.getElementById('capture-btn');
const imagePreview = document.getElementById('image-preview');
const convertBtn = document.getElementById('convert-btn');

// Access the device camera and display the preview
function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      cameraPreview.srcObject = stream;
    })
    .catch(error => {
      console.error('Error accessing camera:', error);
    });
}

// Capture an image from the camera preview
function captureImage() {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = cameraPreview.videoWidth;
  canvas.height = cameraPreview.videoHeight;
  context.drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);
  const imageDataUrl = canvas.toDataURL('image/png');
  showImagePreview(imageDataUrl);
}

// Display the captured image in the preview area
function showImagePreview(imageDataUrl) {
  const img = document.createElement('img');
  img.src = imageDataUrl;
  imagePreview.innerHTML = '';
  imagePreview.appendChild(img);
}

// Convert the captured image to an avatar
function convertToAvatar() {
  // Get the captured image data
  const capturedImage = document.querySelector('#image-preview img');

  // Create a canvas element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Set the canvas dimensions to match the image
  canvas.width = capturedImage.width;
  canvas.height = capturedImage.height;

  // Draw the image on the canvas
  context.drawImage(capturedImage, 0, 0);

  // Apply image processing and conversion
  // Example: Convert the image to grayscale
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    const average = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
    pixels[i] = average; // Red channel
    pixels[i + 1] = average; // Green channel
    pixels[i + 2] = average; // Blue channel
  }

  context.putImageData(imageData, 0, 0);

  // Display the converted image
  const convertedImage = document.createElement('img');
  convertedImage.src = canvas.toDataURL('image/png');
  imagePreview.innerHTML = '';
  imagePreview.appendChild(convertedImage);
}

// Event listeners
captureBtn.addEventListener('click', captureImage);
convertBtn.addEventListener('click', convertToAvatar);

// Start the camera when the page loads
window.addEventListener('DOMContentLoaded', startCamera);

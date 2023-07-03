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
  // Add your image processing and conversion logic here
}

// Event listeners
captureBtn.addEventListener('click', captureImage);
convertBtn.addEventListener('click', convertToAvatar);

// Start the camera when the page loads
window.addEventListener('DOMContentLoaded', startCamera);

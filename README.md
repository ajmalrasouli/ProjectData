
# Avatar Converter

Avatar Converter is a web application that allows users to capture an image using their device's camera and convert it to an avatar. The captured image can be processed and transformed into different avatar styles.

![Avatar Converter Demo](demo.gif)

## Features

- Access the device camera to capture an image.
- Display a preview of the captured image.
- Apply image processing and conversion to transform the image into an avatar.
- Display the converted avatar image.

## Technologies Used

- HTML
- CSS
- JavaScript
- Python
- Firebase (Authentication, Storage)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (for the local development server)
- Python 3.x
- Firebase account and project (with authentication and storage enabled)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/avatar-converter.git
   
1. Install the dependencies for the local development server:
```sh
cd avatar-converter
npm install
```
2. Set up a Firebase project and obtain the service account credentials JSON file.

3. Update the **firebase.py** script with the path to your service account credentials JSON file.

4. Install the necessary Python packages:
```sh
pip install -r requirements.txt
```

5. Build and run the local development server:
```sh
npm start
```
7. Open your web browser and visit http://localhost:3000 to access the Avatar Converter application.

*** Usage ***
Open the Avatar Converter application in your web browser.

Grant access to your device's camera when prompted.

Click the "Capture Image" button to capture an image using the camera.

The captured image will be displayed in the preview area.

Click the "Convert to Avatar" button to apply image processing and convert the image into an avatar.

The converted avatar image will be displayed below the "Convert to Avatar" button.

Repeat steps 3 to 6 to capture and convert more images.


*** Deployment ***

To deploy the Avatar Converter application, follow these steps:

1. Create a Firebase project and configure Firebase Authentication and Firebase Storage.

2. Update the Firebase configuration in the firebase.js file with your Firebase project details.

3. Build the production-ready version of the application:
```sh
npm run build
```
4. Deploy the contents of the build directory to your Firebase hosting.
For example, using the Firebase CLI:
```sh
firebase deploy --only hosting
```
5. Once deployed, access the Avatar Converter application using the provided Firebase Hosting URL.

*** Contributing ***
Contributions are welcome! Feel free to open a new issue or submit a pull request for any improvements or bug fixes.


*** License ***
This project is licensed under the *MIT License*.

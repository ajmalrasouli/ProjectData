import firebase_admin
from firebase_admin import credentials, storage

# Path to your service account credentials JSON file
cred = credentials.Certificate("path/to/serviceAccountKey.json")

# Initialize the app with your service account credentials
firebase_admin.initialize_app(cred)

def upload_image(image_path):
    # Get a reference to the default Firebase Storage bucket
    bucket = storage.bucket()

    # Path to the image file to be uploaded
    image_file = image_path

    # Destination path in Firebase Storage (e.g., "avatars/image.png")
    destination_path = "avatars/image.png"

    # Upload the image file to Firebase Storage
    blob = bucket.blob(destination_path)
    blob.upload_from_filename(image_file)

    # Print the public URL of the uploaded image
    print("Image uploaded. URL:", blob.public_url)

# Call the upload function
image_file_path = "path/to/image.png"
upload_image(image_file_path)

import { Cloudinary } from '@cloudinary/url-gen';

// Initialize Cloudinary with your cloud name
// Replace 'YOUR_CLOUD_NAME' with your actual Cloudinary cloud name
export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'YOUR_CLOUD_NAME',
  },
});

// Helper function to get image URL by public ID
export const getImageUrl = (publicId: string) => {
  return cloudinary.image(publicId).toURL();
};

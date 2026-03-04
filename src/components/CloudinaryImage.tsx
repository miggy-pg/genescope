import { AdvancedImage, placeholder } from '@cloudinary/react';
import { cloudinary } from '@/lib/cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/format';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  className = '',
}: CloudinaryImageProps) {
  // Create the image with transformations
  let image = cloudinary.image(publicId);

  // Apply optimizations
  image = image
    .delivery(format(auto()))
    .delivery(quality(autoQuality()));

  // Apply resize if dimensions provided
  if (width && height) {
    image = image.resize(fill().width(width).height(height).gravity(autoGravity()));
  } else if (width) {
    image = image.resize(fill().width(width).gravity(autoGravity()));
  } else if (height) {
    image = image.resize(fill().height(height).gravity(autoGravity()));
  }

  return (
    <AdvancedImage
      cldImg={image}
      alt={alt}
      className={className}
      plugins={[placeholder({ mode: 'blur' })]}
    />
  );
}

interface AppImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * AppImage component for displaying local images from the public folder
 *
 * Usage:
 * <AppImage src="mystery-hunt/hospital-nursery.png" alt="Hospital nursery" />
 *
 * The src path is relative to /public/images/genescope/
 */
export default function AppImage({
  src,
  alt,
  className = '',
  width,
  height,
}: AppImageProps) {
  // Build the full path from public folder
  const imagePath = `/images/genescope/${src}`;

  return (
    <img
      src={imagePath}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}

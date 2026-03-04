import { Link } from 'react-router-dom';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const isLeft = category.position === 'left';

  // Outer wrapper: tilt/angle the entire button
  // Left: left side up, right side down (negative skewY)
  // Right: right side up, left side down (positive skewY)
  const tiltClass = isLeft ? 'skew-y-2' : '-skew-y-2';

  // Middle container: create parallelogram shape (skewX)
  // Left: slant to the right (negative skewX)
  // Right: slant to the left (positive skewX)
  const shapeClass = isLeft ? '-skew-x-12' : 'skew-x-12';

  // Inner content: counter-skew to keep text straight
  const counterSkewClass = isLeft ? 'skew-x-12' : '-skew-x-12';

  // Icon position
  const flexDirection = isLeft ? 'flex-row' : 'flex-row-reverse';

  // Special handling for GeneScope - link directly to /genescope
  const linkTo = category.slug === 'genescope' ? '/genescope' : `/category/${category.slug}`;

  return (
    // Outer wrapper for tilt
    <div className={`transform ${tiltClass}`}>
      {/* Middle container for parallelogram shape */}
      <div
        className={`transform ${shapeClass} min-w-[220px]
                    bg-gradient-to-b from-[#d4ed6e] via-[#c5e54d] to-[#b8d935]
                    border-[3px] border-[#7CB342] rounded-xl
                    shadow-md cursor-pointer
                    transition-all duration-200 ease-out
                    hover:shadow-lg hover:brightness-105
                    active:scale-95`}
      >
        {/* Inner content with counter-skew */}
        <Link
          to={linkTo}
          className={`block transform ${counterSkewClass} ${flexDirection}
                      flex items-center gap-3 py-3 px-5 w-full`}
        >
          <span className="text-2xl flex-shrink-0">
            {category.icon}
          </span>
          <span className="font-bold text-sm text-[#333] leading-tight">
            {category.name}
          </span>
        </Link>
      </div>
    </div>
  );
}

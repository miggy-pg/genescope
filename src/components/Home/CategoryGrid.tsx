import { useStore } from '@/store/useStore';
import CategoryCard from './CategoryCard';

export default function CategoryGrid() {
  const { categories } = useStore();

  const leftCategories = categories.filter((c) => c.position === 'left');
  const rightCategories = categories.filter((c) => c.position === 'right');

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 py-8 px-4 min-h-[calc(100vh-120px)]">
      {/* Left Panel - align buttons to the right (toward center) */}
      <div className="flex flex-col gap-3 items-end">
        {leftCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Center Logo */}
      <div className="flex flex-col items-center justify-center px-8 py-4">
        <div className="text-7xl mb-2">🌿</div>
        <h1 className="font-display text-5xl text-encarta-text-dark tracking-tight">
          Encarta
        </h1>
        <span className="font-display text-4xl text-encarta-green-dark -mt-1">
          kids
        </span>
      </div>

      {/* Right Panel - align buttons to the left (toward center) */}
      <div className="flex flex-col gap-3 items-start">
        {rightCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

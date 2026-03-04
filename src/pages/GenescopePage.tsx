import { Link, useNavigate } from 'react-router-dom';
import { genescopeCategories, GenescopeCategory } from '@/data/genescopeCategories';

function CategoryButton({ category }: { category: GenescopeCategory }) {
  return (
    <Link
      to={`/genescope/${category.slug}`}
      className="min-w-[180px] py-3 px-6 rounded-lg font-bold text-center transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95 shadow-md"
      style={{
        backgroundColor: category.color,
        color: category.textColor,
      }}
    >
      {category.name}
    </Link>
  );
}

function NavButton({ category, isActive }: { category: GenescopeCategory; isActive?: boolean }) {
  return (
    <Link
      to={`/genescope/${category.slug}`}
      className={`py-2 px-4 rounded-lg font-bold text-sm transition-all duration-200 hover:brightness-110 ${
        isActive ? 'ring-2 ring-white ring-offset-2' : ''
      }`}
      style={{
        backgroundColor: category.color,
        color: category.textColor,
      }}
    >
      {category.name}
    </Link>
  );
}

export default function GenescopePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#E8F4FC] flex flex-col">
      {/* Header */}
      <header className="bg-[#4CAF50] text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Biology Learning Platform</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-[#2E7D32] hover:bg-[#1B5E20] px-4 py-2 rounded-lg transition-colors"
        >
          Home
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Title */}
        <h1 className="font-display text-6xl text-[#333] mb-2">GeneScope</h1>
        <p className="text-[#555] text-center mb-12 max-w-2xl">
          Alamin at Hulaan ang Mga Katangian sa Pamamagitan ng Monohybrid at Dihybrid Crosses
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {genescopeCategories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-[#333] py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {genescopeCategories.map((category) => (
            <NavButton key={category.id} category={category} />
          ))}
        </div>
      </nav>
    </div>
  );
}

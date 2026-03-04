import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { genescopeCategories } from '@/data/genescopeCategories';

interface GenescopeLayoutProps {
  children: ReactNode;
}

function NavButton({
  category,
  isActive,
}: {
  category: (typeof genescopeCategories)[0];
  isActive?: boolean;
}) {
  const navigate = useNavigate();

  const getRoute = (slug: string) => {
    return `/genescope/${slug}`;
  };

  return (
    <button
      onClick={() => navigate(getRoute(category.slug))}
      className={`py-2 px-4 rounded-lg font-bold text-sm transition-all duration-200 hover:brightness-110 ${
        isActive ? 'ring-2 ring-white ring-offset-2' : ''
      }`}
      style={{
        backgroundColor: category.color,
        color: category.textColor,
      }}
    >
      {category.name}
    </button>
  );
}

export default function GenescopeLayout({
  children,
}: GenescopeLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active category from URL
  const currentSlug = location.pathname.split('/genescope/')[1]?.split('/')[0] || '';

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
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-[#333] py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {genescopeCategories.map((category) => (
            <NavButton
              key={category.id}
              category={category}
              isActive={category.slug === currentSlug}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}

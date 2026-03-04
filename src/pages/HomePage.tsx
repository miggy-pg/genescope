import { Link } from 'react-router-dom';
import { genescopeCategories } from '@/data/genescopeCategories';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E0F2FE] via-[#BAE6FD] to-[#7DD3FC]">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          {/* DNA Icon */}
          <div className="text-6xl md:text-7xl mb-4">🧬</div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-3">
            GeneScope
          </h1>

          {/* Subtitle in Filipino */}
          <p className="text-sm md:text-base text-[#1E3A5F]/80 max-w-md mx-auto leading-relaxed">
            Alamin at Hulaan ang Mga Katangian sa Pamamagitan ng Monohybrid at Dihybrid Crosses
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
          {genescopeCategories.map((category) => {
            // Determine the route for each category
            let route = '/';
            switch (category.slug) {
              case 'welcome':
                route = '/genescope/welcome';
                break;
              case 'start-adventure':
                route = '/genescope/start-adventure';
                break;
              case 'mystery-hunt':
                route = '/genescope/mystery-hunt';
                break;
              case 'case-analysis':
                route = '/genescope/case-analysis';
                break;
              case 'build-a-family':
                route = '/genescope/build-a-family';
                break;
              case 'journal':
                route = '/genescope/journal';
                break;
              case 'progress':
                route = '/genescope/progress';
                break;
              default:
                route = '/genescope';
            }

            return (
              <Link
                key={category.id}
                to={route}
                className="group"
              >
                <div
                  className="rounded-2xl py-4 px-6 text-center font-bold text-lg md:text-xl
                             shadow-lg transition-all duration-200
                             hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{
                    backgroundColor: category.color,
                    color: category.textColor,
                  }}
                >
                  {category.name}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer decoration */}
        <div className="flex justify-center gap-2 mt-12 opacity-50">
          <span className="text-2xl">🧬</span>
          <span className="text-2xl">🔬</span>
          <span className="text-2xl">👨‍🔬</span>
          <span className="text-2xl">🧪</span>
          <span className="text-2xl">🧬</span>
        </div>
      </div>
    </main>
  );
}

import { useNavigate } from 'react-router-dom';
import GenescopeLayout from '@/components/GeneScope/GenescopeLayout';

const learningPath = [
  {
    step: 1,
    title: 'Start Adventure',
    description: 'Begin your journey as a Trait Detective! Learn what GeneScope is all about and get ready to explore the world of genetics.',
    icon: '🚀',
    color: '#F97316',
    route: '/genescope/start-adventure',
  },
  {
    step: 2,
    title: 'Mystery Hunt',
    description: 'Solve the mystery of the swapped babies! Use your detective skills to match babies with their real parents by observing traits.',
    icon: '🔍',
    color: '#8B5CF6',
    route: '/genescope/mystery-hunt',
  },
  {
    step: 3,
    title: 'Case Analysis',
    description: 'Discover the science behind the mystery! Learn about genotypes, phenotypes, and how traits are inherited from parents.',
    icon: '🧬',
    color: '#EC4899',
    route: '/genescope/case-analysis',
  },
  {
    step: 4,
    title: 'Take the Quiz',
    description: 'Test your genetics knowledge! Answer questions about what you learned and see how much you remember.',
    icon: '📝',
    color: '#22C55E',
    route: '/genescope/quiz',
  },
];

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <GenescopeLayout>
      <div className="flex-1 flex flex-col items-center px-4 py-8 overflow-y-auto">
        <div className="max-w-3xl w-full">
          {/* Welcome Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">👋🧬</div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-3">
              Welcome to GeneScope!
            </h1>
            <p className="text-[#555] text-lg">
              Your interactive guide to understanding genetics and inheritance
            </p>
          </div>

          {/* Quick Start Guide Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 text-center">
              Quick Start Guide
            </h2>
            <p className="text-[#666] text-center mb-6">
              Follow this recommended learning path for the best experience
            </p>

            {/* Learning Path */}
            <div className="space-y-4">
              {learningPath.map((item, index) => (
                <button
                  key={item.step}
                  onClick={() => navigate(item.route)}
                  className="w-full text-left group"
                >
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-all duration-200 hover:shadow-md">
                    {/* Step Number & Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: item.color }}
                        >
                          STEP {item.step}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#333] text-lg group-hover:text-[#1976D2] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="text-gray-400 group-hover:text-[#1976D2] group-hover:translate-x-1 transition-all text-xl">
                      →
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < learningPath.length - 1 && (
                    <div className="flex justify-start ml-7">
                      <div className="w-0.5 h-4 bg-gray-200"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Start Learning Button */}
          <div className="text-center">
            <button
              onClick={() => navigate('/genescope/start-adventure')}
              className="bg-gradient-to-r from-[#4CAF50] to-[#388E3C] hover:from-[#388E3C] hover:to-[#2E7D32] text-white text-xl font-bold px-12 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Start Learning!
            </button>
            <p className="text-[#888] text-sm mt-3">
              Click any step above to jump directly, or start from the beginning
            </p>
          </div>

          {/* Tips Section */}
          <div className="bg-[#E3F2FD] rounded-xl p-4 mt-6">
            <h3 className="font-bold text-[#1565C0] mb-2 flex items-center gap-2">
              <span>💡</span> Tips for Success
            </h3>
            <ul className="text-[#1565C0] text-sm space-y-1">
              <li>• Follow the steps in order for the best learning experience</li>
              <li>• Pay attention to the traits in the Mystery Hunt - they're clues!</li>
              <li>• Review the Case Analysis before taking the quiz</li>
              <li>• You can always come back and retry any section</li>
            </ul>
          </div>
        </div>
      </div>
    </GenescopeLayout>
  );
}

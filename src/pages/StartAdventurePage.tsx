import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { genescopeCategories } from '@/data/genescopeCategories';

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772655267/genescope/Untitled_design_1_1_2_jivdpg.jpg',
    content: (
      <>
        <p className="text-[#333] mb-4">
          Welcome aboard! <strong>GeneScope</strong>, your personal lab for discovering the secrets of traits!
        </p>
        <p className="text-[#333]">
          Today you're not just learners... you're <strong>Trait Detectives</strong>, ready to solve the mysteries of inheritance, one Punnett Square at a time.
        </p>
      </>
    ),
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772655268/genescope/Untitled_design_22_1_h3hvbh.jpg',
    content: (
      <>
        <p className="text-[#333] mb-4">
          Your mission — should you choose to accept it — includes:
        </p>
        <ul className="text-left space-y-2 text-[#333]">
          <li>
            <strong className="text-[#E91E63]">Crack the Code:</strong> Understand how traits are passed from parents to offspring
          </li>
          <li>
            <strong className="text-[#9C27B0]">Predict the Future:</strong> Use Punnett Squares to foresee genotypes and phenotypes
          </li>
          <li>
            <strong className="text-[#2196F3]">Detect Patterns:</strong> Compare monohybrid and dihybrid crosses to see the laws of inheritance in action
          </li>
          <li>
            <strong className="text-[#4CAF50]">Test Your Skills:</strong> Challenge yourself with interactive games and mini-experiments!
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772655268/genescope/Untitled_design_3_1_mxj5uy.jpg',
    content: (
      <>
        <p className="text-[#333]">
          Ready to enter the Genetic Lab and start your adventure? Click "<strong>Start Adventure!</strong>" to jump in and explore!
        </p>
      </>
    ),
    showStartButton: true,
  },
];

function NavButton({
  category,
  isActive
}: {
  category: typeof genescopeCategories[0];
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

export default function StartAdventurePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentSlideData = slides[currentSlide];

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
        <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-[#333] mb-6">
            Ahoy, Genetic Explorers! <span className="text-2xl">🧬</span>
          </h1>

          {/* Image */}
          <div className="relative mb-6">
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src={currentSlideData.image}
                alt="Genetic Explorers - Scientists in a lab"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Slide Content */}
          <div className="text-center min-h-[150px] flex flex-col justify-center">
            {currentSlideData.content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={goToPrevSlide}
              disabled={currentSlide === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentSlide === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#FF9800] hover:bg-[#F57C00] text-white'
              }`}
            >
              ←
            </button>

            {/* Start Adventure Button (only on last slide) */}
            {currentSlideData.showStartButton && (
              <button
                onClick={() => {
                  // Navigate to Mystery Hunt page
                  navigate('/genescope/mystery-hunt');
                }}
                className="bg-gradient-to-r from-[#4CAF50] to-[#388E3C] hover:from-[#388E3C] hover:to-[#2E7D32] text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold shadow-md hover:shadow-lg"
              >
                Start Adventure!
              </button>
            )}

            {/* Next Button */}
            <button
              onClick={goToNextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentSlide === slides.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#FF9800] hover:bg-[#F57C00] text-white'
              }`}
            >
              →
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#4CAF50]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Back to Dashboard Button - Centered */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            ← Back to Dashboard
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-[#333] py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {genescopeCategories.map((category) => (
            <NavButton
              key={category.id}
              category={category}
              isActive={category.slug === 'start-adventure'}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}

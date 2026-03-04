import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenescopeLayout from '@/components/GeneScope/GenescopeLayout';

type BabyId = 'baby1' | 'baby2' | null;

interface CribState {
  rivera: BabyId;
  santos: BabyId;
}

export default function MatchBabiesPage() {
  const navigate = useNavigate();
  const [cribs, setCribs] = useState<CribState>({ rivera: null, santos: null });
  const [selectedBaby, setSelectedBaby] = useState<BabyId>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Check if baby is placed in a crib
  const isBabyPlaced = (babyId: BabyId) => {
    return cribs.rivera === babyId || cribs.santos === babyId;
  };

  // Handle baby selection (tap to select)
  const handleBabyClick = (babyId: BabyId) => {
    if (isBabyPlaced(babyId)) return;

    // Toggle selection
    if (selectedBaby === babyId) {
      setSelectedBaby(null);
    } else {
      setSelectedBaby(babyId);
    }
  };

  // Handle crib click (place selected baby or remove existing)
  const handleCribClick = (cribId: 'rivera' | 'santos') => {
    // If crib has a baby, remove it
    if (cribs[cribId]) {
      setCribs((prev) => ({ ...prev, [cribId]: null }));
      return;
    }

    // If no baby is selected, do nothing
    if (!selectedBaby) return;

    // Place the selected baby in the crib
    const newCribs = { ...cribs };

    // Remove baby from other crib if it was there
    if (newCribs.rivera === selectedBaby) newCribs.rivera = null;
    if (newCribs.santos === selectedBaby) newCribs.santos = null;

    // Place baby in new crib
    newCribs[cribId] = selectedBaby;
    setCribs(newCribs);
    setSelectedBaby(null);
  };

  const handleCheckAnswer = () => {
    // Correct answer: Baby 1 (dark features) -> Rivera, Baby 2 (light features) -> Santos
    const correct = cribs.rivera === 'baby1' && cribs.santos === 'baby2';
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    navigate('/genescope/mystery-hunt/case-analysis');
  };

  const bothPlaced = cribs.rivera !== null && cribs.santos !== null;

  return (
    <GenescopeLayout>
      <div className="flex-1 flex flex-col items-center px-4 py-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-4 sm:p-8">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#333] mb-4 sm:mb-6">
            Mystery Hunt!
          </h1>

          {/* Instructions */}
          <div className="bg-[#E3F2FD] rounded-xl p-4 mb-6">
            <p className="text-center text-[#1565C0] text-sm sm:text-base">
              <strong>Tap a baby</strong> to select it, then <strong>tap a crib</strong> to place them. Look closely at the traits of the babies and the parents—hair, skin, eyes, and nose can help you decide. Tap a placed baby to remove them.
            </p>
          </div>

          {/* Selected Baby Indicator */}
          {selectedBaby && (
            <div className="bg-[#FFF3E0] rounded-xl p-3 mb-4 text-center">
              <p className="text-[#E65100] font-semibold">
                {selectedBaby === 'baby1' ? '👶🏾 Baby 1' : '👶🏻 Baby 2'} selected! Tap a crib to place them.
              </p>
            </div>
          )}

          {/* Babies Section */}
          <div className="flex justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            {/* Baby 1 */}
            <button
              onClick={() => handleBabyClick('baby1')}
              disabled={isBabyPlaced('baby1')}
              className={`transition-all duration-200 ${
                isBabyPlaced('baby1')
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:scale-105 active:scale-95'
              } ${
                selectedBaby === 'baby1'
                  ? 'ring-4 ring-[#FF9800] ring-offset-2 rounded-xl'
                  : ''
              }`}
            >
              <div className="w-28 h-36 sm:w-32 sm:h-40 bg-[#E1BEE7] rounded-xl flex flex-col items-center justify-center shadow-md">
                <div className="text-5xl sm:text-6xl mb-2">👶🏾</div>
                <p className="font-bold text-[#4A148C] text-sm sm:text-base">Baby 1</p>
              </div>
            </button>

            {/* Baby 2 */}
            <button
              onClick={() => handleBabyClick('baby2')}
              disabled={isBabyPlaced('baby2')}
              className={`transition-all duration-200 ${
                isBabyPlaced('baby2')
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:scale-105 active:scale-95'
              } ${
                selectedBaby === 'baby2'
                  ? 'ring-4 ring-[#FF9800] ring-offset-2 rounded-xl'
                  : ''
              }`}
            >
              <div className="w-28 h-36 sm:w-32 sm:h-40 bg-[#C8E6C9] rounded-xl flex flex-col items-center justify-center shadow-md">
                <div className="text-5xl sm:text-6xl mb-2">👶🏻</div>
                <p className="font-bold text-[#1B5E20] text-sm sm:text-base">Baby 2</p>
              </div>
            </button>
          </div>

          {/* Main Scene - Parents with Cribs */}
          <div className="bg-[#FFF8E1] rounded-xl p-4 sm:p-6 mb-6">
            {/* Room Scene */}
            <div className="relative">
              {/* Parents Row */}
              <div className="flex justify-around mb-4">
                {/* Rivera Parents */}
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl">👨🏾 👩🏾</div>
                  <p className="font-bold text-[#5D4037] mt-2 text-sm sm:text-base">The Riveras</p>
                </div>

                {/* Santos Parents */}
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl">👨🏻 👩🏻</div>
                  <p className="font-bold text-[#5D4037] mt-2 text-sm sm:text-base">The Santos</p>
                </div>
              </div>

              {/* Cribs Row */}
              <div className="flex justify-around">
                {/* Rivera Crib */}
                <button
                  onClick={() => handleCribClick('rivera')}
                  className={`w-32 h-28 sm:w-40 sm:h-32 border-4 border-dashed rounded-xl flex items-center justify-center transition-all duration-200 ${
                    cribs.rivera
                      ? 'border-[#4CAF50] bg-[#E8F5E9] hover:bg-[#C8E6C9]'
                      : selectedBaby
                      ? 'border-[#FF9800] bg-[#FFF3E0] hover:bg-[#FFE0B2] animate-pulse'
                      : 'border-[#BDBDBD] bg-white hover:border-[#9E9E9E]'
                  }`}
                >
                  {cribs.rivera ? (
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl">
                        {cribs.rivera === 'baby1' ? '👶🏾' : '👶🏻'}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Tap to remove</p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400">
                      <div className="text-2xl sm:text-3xl">🛏️</div>
                      <p className="text-xs sm:text-sm">Tap to place</p>
                    </div>
                  )}
                </button>

                {/* Santos Crib */}
                <button
                  onClick={() => handleCribClick('santos')}
                  className={`w-32 h-28 sm:w-40 sm:h-32 border-4 border-dashed rounded-xl flex items-center justify-center transition-all duration-200 ${
                    cribs.santos
                      ? 'border-[#4CAF50] bg-[#E8F5E9] hover:bg-[#C8E6C9]'
                      : selectedBaby
                      ? 'border-[#FF9800] bg-[#FFF3E0] hover:bg-[#FFE0B2] animate-pulse'
                      : 'border-[#BDBDBD] bg-white hover:border-[#9E9E9E]'
                  }`}
                >
                  {cribs.santos ? (
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl">
                        {cribs.santos === 'baby1' ? '👶🏾' : '👶🏻'}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Tap to remove</p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400">
                      <div className="text-2xl sm:text-3xl">🛏️</div>
                      <p className="text-xs sm:text-sm">Tap to place</p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Result Message */}
          {showResult && (
            <div
              className={`rounded-xl p-4 mb-6 ${
                isCorrect ? 'bg-[#E8F5E9]' : 'bg-[#FFEBEE]'
              }`}
            >
              {isCorrect ? (
                <div className="text-center">
                  <p className="text-2xl mb-2">🎉</p>
                  <p className="text-[#2E7D32] font-bold text-lg">
                    Congratulations! You solved the mystery!
                  </p>
                  <p className="text-[#388E3C] text-sm sm:text-base">
                    Baby 1 belongs to the Riveras and Baby 2 belongs to the Santos family.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-2xl mb-2">🤔</p>
                  <p className="text-[#C62828] font-bold text-lg">
                    Not quite right!
                  </p>
                  <p className="text-[#D32F2F] text-sm sm:text-base">
                    Look at the traits again. Which baby has features that match each family?
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            {!showResult && bothPlaced && (
              <button
                onClick={handleCheckAnswer}
                className="bg-[#FF9800] hover:bg-[#F57C00] text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              >
                Check Answer
              </button>
            )}

            {showResult && isCorrect && (
              <button
                onClick={handleNext}
                className="bg-[#4CAF50] hover:bg-[#388E3C] text-white text-lg sm:text-xl font-bold px-8 sm:px-12 py-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              >
                NEXT!
              </button>
            )}

            {showResult && !isCorrect && (
              <button
                onClick={() => {
                  setShowResult(false);
                  setCribs({ rivera: null, santos: null });
                  setSelectedBaby(null);
                }}
                className="bg-[#FF9800] hover:bg-[#F57C00] text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              >
                Try Again
              </button>
            )}
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
      </div>
    </GenescopeLayout>
  );
}

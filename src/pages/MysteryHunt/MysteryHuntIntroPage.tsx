import { useNavigate } from "react-router-dom";
import GenescopeLayout from "@/components/GeneScope/GenescopeLayout";

export default function MysteryHuntIntroPage() {
  const navigate = useNavigate();

  return (
    <GenescopeLayout>
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-[#333] mb-6">
            Mystery Hunt!
          </h1>

          {/* Case File Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#FFF3E0] border-2 border-[#FF9800] rounded-lg px-4 py-2">
              <span className="text-[#E65100] font-bold">
                🔍 CASE FILE #001: The Swapped Baby
              </span>
            </div>
          </div>

          {/* Story Introduction */}
          <div className="text-center mb-6">
            <p className="text-[#555] mb-4">
              Last night at City Hospital, something unexpected happened!
              <br />
              The nursery's babies were mysteriously swapped!
            </p>
          </div>

          {/* Hospital Image */}
          <div className="mb-6">
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772654509/genescope/city_hospital_ppcqjg.jpg"
                alt="Hospital nursery scene - babies in cribs"
                className="w-full h-84 object-cover"
              />
            </div>
          </div>

          {/* Case Details */}
          <div className="bg-[#F5F5F5] rounded-xl p-6 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl mb-1">👶👶</div>
                <p className="text-sm font-semibold text-[#333]">
                  Two newborns
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl mb-1">🍼🍼</div>
                <p className="text-sm font-semibold text-[#333]">Two babies</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl mb-1">👨‍👩‍👦 👨‍👩‍👦</div>
                <p className="text-sm font-semibold text-[#333]">
                  Two families
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl mb-1">🔀</div>
                <p className="text-sm font-semibold text-[#333]">One mix-up!</p>
              </div>
            </div>

            <p className="text-center text-[#555]">
              <strong>Can you solve this investigation?</strong>
            </p>
          </div>

          {/* Nurse with worried parents */}
          <div className="mb-6">
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772654505/genescope/switched_vd15ur.jpg"
                alt="Nurse with worried parents"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-[#E3F2FD] rounded-xl p-4 mb-8">
            <p className="text-center text-[#1565C0]">
              <strong>Your mission:</strong> Determine which baby belongs to
              which parents
            </p>
          </div>

          {/* Open Case Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/genescope/mystery-hunt/interview")}
              className="bg-[#FF9800] hover:bg-[#F57C00] text-white text-xl font-bold px-12 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
            >
              OPEN THE CASE
            </button>
          </div>
        </div>

        {/* Back to Dashboard Button - Centered */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </GenescopeLayout>
  );
}

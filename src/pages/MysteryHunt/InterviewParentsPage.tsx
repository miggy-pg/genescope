import { useNavigate } from "react-router-dom";
import GenescopeLayout from "@/components/GeneScope/GenescopeLayout";

export default function InterviewParentsPage() {
  const navigate = useNavigate();

  return (
    <GenescopeLayout>
      <div className="flex-1 flex flex-col items-center px-4 py-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-[#333] mb-2">
            Mystery Hunt!
          </h1>

          {/* Step Indicator */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#E8F5E9] border-2 border-[#4CAF50] rounded-full px-6 py-2">
              <span className="text-[#2E7D32] font-bold">
                📋 STEP 1: Interview the Parents
              </span>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-center text-[#555] mb-6">
            It's time to meet the parents and figure out the mystery.
          </p>

          {/* Story Text */}
          <div className="bg-[#FFF8E1] rounded-xl p-4 mb-6">
            <p className="text-[#5D4037] text-sm leading-relaxed">
              They say that last night, something strange happened in the
              hospital nursery. The lights flickered, a sudden storm shook the
              windows, and in the chaos, two babies were accidentally switched!
              The nurse tried to keep track, but in the confusion, the babies
              got mixed up, and now she can't tell which one belongs to which
              parents.
            </p>
          </div>

          {/* Nurse Image */}
          <div className="mb-6">
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772655306/genescope/intervieww_a7qxm5.jpg"
                alt="Nurse with trait profiles clipboard"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Instruction */}
          <div className="bg-[#E3F2FD] rounded-xl p-4 mb-6">
            <p className="text-center text-[#1565C0] font-semibold">
              🧬 Use only the traits mentioned in the clues to find the baby's
              biological parents!
            </p>
          </div>

          {/* Section Title */}
          <h2 className="text-2xl font-bold text-center text-[#333] mb-6">
            GENETIC TRAIT PROFILES: THE PARENTS
          </h2>

          <p className="text-center text-[#555] mb-6">
            Here are the two couples involved in the baby mystery:
          </p>

          {/* Parents Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Couple A: Rivera */}
            <div className="bg-[#FCE4EC] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#880E4F] mb-4">
                👨‍👩‍👦 Couple A: Mr. and Mrs. Rivera
              </h3>

              {/* Parents Image Placeholder */}
              <div className="w-full h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl">👨🏾 👩🏾</div>
                  <p className="text-xs text-gray-400 mt-1">Rivera couple</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#4A148C]">
                <p>
                  <strong>Mr. Rivera:</strong> One has straight black hair,
                  medium brown skin, dark brown eyes and a softly rounded nose.
                </p>
                <p>
                  <strong>Mrs. Rivera:</strong> The other has curly black hair,
                  medium brown skin, dark brown eyes, and a rounded nose.
                </p>
              </div>
            </div>

            {/* Couple B: Santos */}
            <div className="bg-[#E8F5E9] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#1B5E20] mb-4">
                👨‍👩‍👦 Couple B: Mr. and Mrs. Santos
              </h3>

              {/* Parents Image Placeholder */}
              <div className="w-full h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl">👨🏻 👩🏻</div>
                  <p className="text-xs text-gray-400 mt-1">Santos couple</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#1B5E20]">
                <p>
                  <strong>Mr. Santos:</strong> One has straight light brown
                  hair, fair skin, light brown eyes, and a slightly pointed
                  nose.
                </p>
                <p>
                  <strong>Mrs. Santos:</strong> The other has wavy light brown
                  hair, fair skin, light brown eyes, and a pointed nose.
                </p>
              </div>
            </div>
          </div>

          {/* Babies Section */}
          <h2 className="text-2xl font-bold text-center text-[#333] mb-6">
            THE BABIES
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Baby 1 */}
            <div className="bg-[#EDE7F6] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#4527A0] mb-4 text-center">
                👶 Baby 1
              </h3>

              {/* Baby Image Placeholder */}
              <div className="w-full h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-5xl">👶🏾</div>
                  <p className="text-xs text-gray-400 mt-1">Baby 1</p>
                </div>
              </div>

              <p className="text-sm text-[#311B92]">
                This little one has <strong>curly black hair</strong>,{" "}
                <strong>medium brown skin</strong>,{" "}
                <strong>dark brown eyes</strong>, and a{" "}
                <strong>softly rounded nose</strong>. Every feature seems to
                echo one of the parents, but which one? Look closely—the eyes
                and the nose make it easy to notice the details.
              </p>
            </div>

            {/* Baby 2 */}
            <div className="bg-[#FFF3E0] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#E65100] mb-4 text-center">
                👶 Baby 2
              </h3>

              {/* Baby Image Placeholder */}
              <div className="w-full h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-5xl">👶🏻</div>
                  <p className="text-xs text-gray-400 mt-1">Baby 2</p>
                </div>
              </div>

              <p className="text-sm text-[#BF360C]">
                This baby has <strong>straight light brown hair</strong>,{" "}
                <strong>fair skin</strong>, <strong>light brown eyes</strong>{" "}
                and a <strong>slightly pointed nose</strong>. Try to spot the
                differences and similarities—but which parents do they belong
                to?
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#F5F5F5] rounded-xl p-4 mb-8">
            <p className="text-center text-[#333]">
              Look closely at their features. Can you figure out which baby
              belongs to which parents? <strong>Every detail is a clue.</strong>
            </p>
          </div>

          {/* Solve Now Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/genescope/mystery-hunt/match")}
              className="bg-[#4CAF50] hover:bg-[#388E3C] text-white text-xl font-bold px-12 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Solve Now!
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

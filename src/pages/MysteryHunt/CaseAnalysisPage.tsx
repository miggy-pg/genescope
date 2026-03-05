import { useNavigate } from "react-router-dom";
import GenescopeLayout from "@/components/GeneScope/GenescopeLayout";

interface SectionProps {
  icon: string;
  title: string;
  content: React.ReactNode;
  bgColor: string;
  lightBgColor: string;
  textColor: string;
  placeholderText: string;
  imageUrl?: string;
}

function Section({
  icon,
  title,
  content,
  bgColor,
  lightBgColor,
  textColor,
  placeholderText,
  imageUrl,
}: SectionProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
      <div className="grid md:grid-cols-2">
        {/* Left - Text */}
        <div className={`${bgColor} p-6 md:p-8`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{icon}</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {title}
            </h2>
          </div>
          <div className="text-white/95 text-sm md:text-base leading-relaxed">
            {content}
          </div>
        </div>
        {/* Right - Image */}
        <div className={`${lightBgColor} p-6 md:p-8 flex flex-col`}>
          <h3
            className={`text-lg md:text-xl font-bold ${textColor} mb-4 flex items-center gap-2`}
          >
            <span>{icon}</span>
            {title}
          </h3>
          {/* IMAGE or PLACEHOLDER */}
          {imageUrl ? (
            <div className="flex-1 rounded-xl overflow-hidden min-h-[140px] md:min-h-[160px]">
              <img
                src={imageUrl}
                alt={placeholderText}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="flex-1 bg-white/80 backdrop-blur rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[140px] md:min-h-[160px]">
              <div className="text-center p-4">
                <div className="text-4xl mb-2 opacity-50">🖼️</div>
                <p className="text-gray-500 text-sm">{placeholderText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CaseAnalysisPage() {
  const navigate = useNavigate();

  return (
    <GenescopeLayout>
      <div className="flex-1 flex flex-col items-center px-4 py-6 md:py-10 overflow-y-auto">
        <div className="max-w-5xl w-full">
          {/* Title */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-[#333] mb-2">
              Case Analysis
            </h1>
            <p className="text-gray-500">
              Understanding the science behind the mystery
            </p>
          </div>

          {/* Section 1: What Really Happened */}
          <Section
            icon="🔍"
            title="What Really Happened? The Science Behind the Mystery"
            bgColor="bg-gradient-to-br from-[#1976D2] to-[#1565C0]"
            lightBgColor="bg-[#E3F2FD]"
            textColor="text-[#1565C0]"
            placeholderText="Family genetics illustration"
            imageUrl="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772707037/genescope/Gemini_Generated_Image_f0zhyef0zhyef0zh_svdzq9.jpg"
            content={
              <>
                <p className="mb-3">
                  Now that the babies are back with their real parents, you
                  might be wondering...
                </p>
                <p className="mb-3">
                  How were you able to figure out just by looking at traits? The
                  answer lies in something called <strong>genetics</strong> —
                  the science of how traits are passed from parents to children.
                </p>
                <p>
                  Every parent carries special instructions inside their body.
                  These instructions are called <strong>genes</strong>. Genes
                  are like tiny recipe cards that decide things like hair color,
                  eye color, and even shape of your nose.
                </p>
              </>
            }
          />

          {/* Section 2: Genotype */}
          <Section
            icon="🧬"
            title="Genotype – The Hidden Code"
            bgColor="bg-gradient-to-br from-[#3F51B5] to-[#303F9F]"
            lightBgColor="bg-[#E8EAF6]"
            textColor="text-[#303F9F]"
            placeholderText="Baby inheriting genes from parents"
            imageUrl="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772707134/genescope/Gemini_Generated_Image_pvcuapvcuapvcuap_utio4z.jpg"
            content={
              <>
                <p className="mb-3">
                  Each person has a <strong>genotype</strong>.
                </p>
                <p className="mb-3">
                  This is the genetic "makeup" of a person — the pair of
                  instructions (called <strong>alleles</strong>) they inherit
                  from their mother and father.
                </p>
                <p className="mb-3">
                  Think of <strong>genotype</strong> as the hidden code inside
                  the body. You cannot see it directly, but it controls what
                  traits appear.
                </p>
                <p>
                  For example, a baby may carry one instruction for black hair
                  and one for light brown hair. That pair of instructions is the
                  baby's genotype for hair color.
                </p>
              </>
            }
          />

          {/* Section 3: Phenotype */}
          <Section
            icon="👁️"
            title="Phenotype – What You Can See"
            bgColor="bg-gradient-to-br from-[#FF5722] to-[#E64A19]"
            lightBgColor="bg-[#FBE9E7]"
            textColor="text-[#E64A19]"
            placeholderText="Babies showing visible traits"
            imageUrl="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772707037/genescope/Gemini_Generated_Image_fm0k0tfm0k0tfm0k_qpl21n.jpg"
            content={
              <>
                <p className="mb-3">
                  The <strong>phenotype</strong> is the trait you can actually
                  observe:
                </p>
                <ul className="list-disc list-inside mb-3 space-y-1 ml-2">
                  <li>Hair color</li>
                  <li>Eye color</li>
                  <li>Nose shape</li>
                  <li>Skin tone</li>
                </ul>
                <p className="mb-3">
                  <strong>Phenotype</strong> is the visible result of the
                  genotype. Sometimes the environment (like sunlight, nutrition,
                  or health) can also slightly affect phenotype.
                </p>
                <p>
                  In the baby mystery, you solved the case by looking at
                  phenotypes!
                </p>
              </>
            }
          />

          {/* Section 4: Homozygous */}
          <Section
            icon="🟢"
            title="Homozygous – Same Instructions"
            bgColor="bg-gradient-to-br from-[#00897B] to-[#00695C]"
            lightBgColor="bg-[#E0F2F1]"
            textColor="text-[#00695C]"
            placeholderText="BB and bb allele illustration"
            imageUrl="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772707037/genescope/Gemini_Generated_Image_ltm997ltm997ltm9_ou97wd.jpg"
            content={
              <>
                <p className="mb-3">
                  When a person has <strong>two identical alleles</strong> for a
                  trait, we call this <strong>homozygous</strong>.
                </p>
                <p className="mb-2">This means:</p>
                <ul className="list-disc list-inside mb-3 space-y-1 ml-2">
                  <li>
                    Two dominant alleles (for example both for black hair):{" "}
                    <strong>BB</strong>
                  </li>
                  <li>
                    Two recessive alleles (for example both for light brown
                    hair): <strong>bb</strong>
                  </li>
                </ul>
                <p>
                  It's like receiving the same instruction from both parents.
                </p>
              </>
            }
          />

          {/* Section 5: Heterozygous */}
          <Section
            icon="🟣"
            title="Heterozygous – Different Instructions"
            bgColor="bg-gradient-to-br from-[#7B1FA2] to-[#6A1B9A]"
            lightBgColor="bg-[#F3E5F5]"
            textColor="text-[#6A1B9A]"
            placeholderText="Bb allele illustration"
            imageUrl="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772707037/genescope/Gemini_Generated_Image_mlu0irmlu0irmlu0_ilio9k.jpg"
            content={
              <>
                <p className="mb-3">
                  When a person has two different alleles for a trait, we call
                  this <strong>heterozygous</strong>.
                </p>
                <p className="mb-2">This means:</p>
                <ul className="list-disc list-inside mb-3 space-y-1 ml-2">
                  <li>One dominant allele</li>
                  <li>One recessive allele</li>
                </ul>
                <p className="mb-3">
                  In most cases, the dominant allele is the one that shows in
                  the phenotype.
                </p>
                <p>
                  So even if a baby carries one instruction for light brown
                  hair, if black hair is dominant, the baby may still have black
                  hair.
                </p>
              </>
            }
          />

          {/* Section 6: Genotypic Ratio */}
          <Section
            icon="📊"
            title="Genotypic Ratio – The Possible Genetic Combinations"
            bgColor="bg-gradient-to-br from-[#0288D1] to-[#0277BD]"
            lightBgColor="bg-[#E1F5FE]"
            textColor="text-[#0277BD]"
            placeholderText="Punnett square showing 1:2:1 ratio"
            imageUrl="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772707037/genescope/Gemini_Generated_Image_ixnmp7ixnmp7ixnm_1_pdsj4w.jpg"
            content={
              <>
                <p className="mb-3">
                  When we predict traits using a genetic cross (like a{" "}
                  <strong>Punnett square</strong>), we can calculate something
                  called the <strong>genotypic ratio</strong>.
                </p>
                <p className="mb-3">
                  This shows the probability of different genetic combinations
                  in the offspring.
                </p>
                <p className="mb-3">
                  If two parents are both heterozygous, the possible genotypes
                  of their baby might follow a <strong>1:2:1</strong> ratio.
                </p>
                <p>
                  This ratio does NOT show what the baby looks like. It shows
                  the possible "hidden" genetic combinations.
                </p>
              </>
            }
          />

          {/* Section 7: Phenotypic Ratio */}
          <Section
            icon="📈"
            title="Phenotypic Ratio – The Visible Outcome"
            bgColor="bg-gradient-to-br from-[#F9A825] to-[#F57F17]"
            lightBgColor="bg-[#FFFDE7]"
            textColor="text-[#F57F17]"
            placeholderText="3:1 ratio illustration with babies"
            imageUrl="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772707037/genescope/Gemini_Generated_Image_o600ywo600ywo600_udvcgz.jpg"
            content={
              <>
                <p className="mb-3">
                  The <strong>phenotypic ratio</strong> shows the probability of
                  visible traits.
                </p>
                <p className="mb-3">
                  If black hair is dominant and light brown hair is recessive,
                  the phenotypic ratio might be <strong>3:1</strong>.
                </p>
                <p className="mb-2">That means:</p>
                <ul className="list-disc list-inside mb-3 space-y-1 ml-2">
                  <li>3 out of 4 babies may show black hair</li>
                  <li>1 out of 4 may show light brown hair</li>
                </ul>
                <p>This is why some traits appear more often than others.</p>
              </>
            }
          />

          {/* Section 8: Back to the Mystery */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
            <div className="grid md:grid-cols-2">
              {/* Left - Image */}
              <div className="bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] p-6 md:p-8 flex flex-col order-2 md:order-1">
                {/* IMAGE PLACEHOLDER */}
                <div className="flex-1 rounded-xl overflow-hidden min-h-[140px] md:min-h-[160px]">
                  <img
                    src="https://res.cloudinary.com/dz2ibjr0c/image/upload/v1772707538/genescope/Gemini_Generated_Image_3be3bn3be3bn3be3_nc4j5f.jpg"
                    // alt={placeholderText}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Right - Text */}
              <div className="bg-white p-6 md:p-8 order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🔙</span>
                  <h2 className="text-xl md:text-2xl font-bold text-[#E91E63]">
                    Back to the Mystery...
                  </h2>
                </div>
                <div className="text-gray-700 text-sm md:text-base leading-relaxed">
                  <p className="mb-4">
                    When you matched the babies to the correct parents, you were
                    actually thinking like a geneticist.
                  </p>
                  <div className="space-y-2 mb-4 pl-4 border-l-4 border-[#E91E63]/30">
                    <p>You observed phenotypes.</p>
                    <p>You inferred possible genotypes.</p>
                    <p>You looked for patterns.</p>
                    <p>You connected traits.</p>
                  </div>
                  <p className="mb-4">
                    And without realizing it, you used the basic rules of
                    heredity.
                  </p>
                  <p className="mb-6 font-medium">
                    The baby swap was solved not by guessing, but by
                    understanding how traits are passed from one generation to
                    the next.
                  </p>
                  {/* NEXT Button */}
                  <button
                    onClick={() => navigate("/genescope/case-analysis/quiz")}
                    className="w-full md:w-auto bg-gradient-to-r from-[#4CAF50] to-[#388E3C] hover:from-[#388E3C] hover:to-[#2E7D32] text-white font-bold px-10 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    NEXT!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Dashboard Button */}
          <div className="text-center mb-6">
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </GenescopeLayout>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenescopeLayout from '@/components/GeneScope/GenescopeLayout';

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string }[];
  correctAnswer: string;
  answerHint?: string;
}

// Slide 1: Scenario-based / Ethics Questions
const slide1Questions: Question[] = [
  {
    id: 1,
    question: 'Hospital Responsibility\nTwo babies were switched by mistake at the hospital. What should the hospital staff do first?',
    options: [
      { label: 'a) Ignore it and hope no one notices', value: 'a' },
      { label: 'b) Tell the parents and keep the babies safe', value: 'b' },
      { label: 'c) Blame the nurses', value: 'c' },
      { label: 'd) Post pictures online to ask people for help', value: 'd' },
    ],
    correctAnswer: 'b',
    answerHint: 'Think about keeping the babies safe.',
  },
  {
    id: 2,
    question: "Parents' Rights\nThe parents don't know which baby is theirs. How should the hospital treat the parents?",
    options: [
      { label: 'a) Calmly, with respect and support', value: 'a' },
      { label: 'b) Tell them to leave and wait outside', value: 'b' },
      { label: 'c) Make them guess quickly', value: 'c' },
      { label: 'd) Ignore their feelings', value: 'd' },
    ],
    correctAnswer: 'a',
    answerHint: 'Think about fairness and respect.',
  },
  {
    id: 3,
    question: 'Privacy and Safety\nWhy should no one share pictures or personal information about the babies online?',
    options: [
      { label: 'a) It helps the babies stay safe and private', value: 'a' },
      { label: 'b) It makes it easier to find the babies', value: 'b' },
      { label: 'c) It is not important at all', value: 'c' },
      { label: 'd) It will make the hospital famous', value: 'd' },
    ],
    correctAnswer: 'a',
    answerHint: 'Think about safety.',
  },
  {
    id: 4,
    question: "Observing Traits\nHow can looking at a baby's hair, eyes, or skin help the parents?",
    options: [
      { label: 'a) It helps parents figure out which baby is theirs', value: 'a' },
      { label: 'b) It changes the baby\'s traits', value: 'b' },
      { label: 'c) It is just for fun and has no use', value: 'c' },
      { label: 'd) It confuses the parents', value: 'd' },
    ],
    correctAnswer: 'a',
    answerHint: 'Traits can show which baby belongs to which parents.',
  },
  {
    id: 5,
    question: 'Learning from Mistakes\nAfter a mix-up like this, what can hospitals do to avoid switching babies next time?',
    options: [
      { label: 'a) Make rules to check babies carefully', value: 'a' },
      { label: 'b) Stop having babies in hospitals', value: 'b' },
      { label: 'c) Let parents bring their own babies', value: 'c' },
      { label: 'd) Ignore mistakes and hope for the best', value: 'd' },
    ],
    correctAnswer: 'a',
    answerHint: 'Think about rules and checking carefully.',
  },
];

// Slide 2: Genetics Knowledge Questions
const slide2Questions: Question[] = [
  {
    id: 1,
    question: 'What does genotype mean?',
    options: [
      { label: 'a) The hair, eyes, and skin you can see', value: 'a' },
      { label: 'b) The hidden instructions a baby gets from their parents', value: 'b' },
      { label: 'c) The baby\'s favorite food', value: 'c' },
      { label: 'd) The way a baby behaves', value: 'd' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 2,
    question: 'What does phenotype mean?',
    options: [
      { label: 'a) The traits you can see, like hair, eyes, and skin', value: 'a' },
      { label: 'b) The hidden instructions inside your body', value: 'b' },
      { label: 'c) The baby\'s name', value: 'c' },
      { label: 'd) The parents\' favorite color', value: 'd' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 3,
    question: 'If a baby has two identical instructions for a trait, what is it called?',
    options: [
      { label: 'a) Homozygous', value: 'a' },
      { label: 'b) Heterozygous', value: 'b' },
      { label: 'c) Phenotype', value: 'c' },
      { label: 'd) Genotype', value: 'd' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 4,
    question: 'If a baby has two different instructions for a trait, what is it called?',
    options: [
      { label: 'a) Heterozygous', value: 'a' },
      { label: 'b) Homozygous', value: 'b' },
      { label: 'c) Phenotype', value: 'c' },
      { label: 'd) Genotypic ratio', value: 'd' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 5,
    question: 'What does genotypic ratio tell us?',
    options: [
      { label: 'a) The visible traits of babies', value: 'a' },
      { label: 'b) The probability of different genetic instructions in babies', value: 'b' },
      { label: 'c) The babies\' favorite toys', value: 'c' },
      { label: 'd) How parents look', value: 'd' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 6,
    question: 'What does phenotypic ratio tell us?',
    options: [
      { label: 'a) How babies look based on traits like hair, eyes, and nose', value: 'a' },
      { label: 'b) The hidden instructions inside the baby', value: 'b' },
      { label: 'c) The number of nurses in the hospital', value: 'c' },
      { label: 'd) The parents\' favorite traits', value: 'd' },
    ],
    correctAnswer: 'a',
  },
];

export default function QuizPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slide1Answers, setSlide1Answers] = useState<Record<number, string>>({});
  const [slide2Answers, setSlide2Answers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestions = currentSlide === 1 ? slide1Questions : slide2Questions;
  const currentAnswers = currentSlide === 1 ? slide1Answers : slide2Answers;
  const setCurrentAnswers = currentSlide === 1 ? setSlide1Answers : setSlide2Answers;

  const handleAnswerChange = (questionId: number, value: string) => {
    if (submitted) return;
    setCurrentAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    slide1Questions.forEach((q) => {
      if (slide1Answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    slide2Questions.forEach((q) => {
      if (slide2Answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSlide1Answers({});
    setSlide2Answers({});
    setSubmitted(false);
    setScore(0);
    setCurrentSlide(1);
  };

  const allSlide1Answered = slide1Questions.every((q) => slide1Answers[q.id]);
  const allSlide2Answered = slide2Questions.every((q) => slide2Answers[q.id]);
  const allAnswered = allSlide1Answered && allSlide2Answered;

  const totalQuestions = slide1Questions.length + slide2Questions.length;

  const slide1Instructions = "Answer the questions below based on what you observed in the mystery case and what you learned about traits, genotypes, and phenotypes. Think carefully and justify your answers when needed.";
  const slide2Instructions = "Read each question and choose the best answer. Remember the baby swap story — use what you learned about traits!";

  return (
    <GenescopeLayout>
      <div className="flex-1 flex flex-col items-center px-4 py-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-[#333] mb-2">
            📝 Detective's Quiz: Test Your Genetics Skills
          </h1>

          {/* Instructions */}
          <div className="bg-[#F5F5F5] rounded-xl p-4 mb-6">
            <p className="text-[#333]">
              <strong>Instructions:</strong><br />
              {currentSlide === 1 ? slide1Instructions : slide2Instructions}
            </p>
          </div>

          {/* Score Display (when submitted) */}
          {submitted && (
            <div
              className={`rounded-xl p-6 mb-6 ${
                score === totalQuestions
                  ? 'bg-[#E8F5E9]'
                  : score >= totalQuestions / 2
                  ? 'bg-[#FFF3E0]'
                  : 'bg-[#FFEBEE]'
              }`}
            >
              <div className="text-center">
                <p className="text-4xl mb-2">
                  {score === totalQuestions ? '🎉' : score >= totalQuestions / 2 ? '👍' : '📚'}
                </p>
                <p className="text-2xl font-bold mb-2">
                  You scored {score} out of {totalQuestions}!
                </p>
                <p className="text-[#555]">
                  {score === totalQuestions
                    ? "Perfect! You're a true genetics detective!"
                    : score >= totalQuestions / 2
                    ? 'Good job! Review the questions you missed.'
                    : 'Keep learning! Review the Case Analysis to improve.'}
                </p>
              </div>
            </div>
          )}

          {/* Questions */}
          <div className="space-y-6 mb-8">
            {currentQuestions.map((q, index) => {
              const isCorrect = submitted && currentAnswers[q.id] === q.correctAnswer;
              const isWrong = submitted && currentAnswers[q.id] && currentAnswers[q.id] !== q.correctAnswer;

              // Parse question text for title and description
              const questionLines = q.question.split('\n');
              const questionTitle = questionLines.length > 1 ? questionLines[0] : null;
              const questionText = questionLines.length > 1 ? questionLines.slice(1).join('\n') : q.question;

              return (
                <div
                  key={q.id}
                  className={`rounded-xl p-6 ${
                    submitted
                      ? isCorrect
                        ? 'bg-[#E8F5E9] border-2 border-[#4CAF50]'
                        : isWrong
                        ? 'bg-[#FFEBEE] border-2 border-[#F44336]'
                        : 'bg-[#F5F5F5]'
                      : 'bg-[#F5F5F5]'
                  }`}
                >
                  <div className="mb-4">
                    {questionTitle && (
                      <p className="font-bold text-[#1565C0] mb-1">
                        {index + 1}. {questionTitle}
                      </p>
                    )}
                    <p className={`${questionTitle ? 'text-[#333]' : 'font-bold text-[#333]'}`}>
                      {questionTitle ? questionText : `${index + 1}. ${questionText}`}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {q.options.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          submitted
                            ? option.value === q.correctAnswer
                              ? 'bg-[#C8E6C9]'
                              : currentAnswers[q.id] === option.value
                              ? 'bg-[#FFCDD2]'
                              : 'bg-white'
                            : currentAnswers[q.id] === option.value
                            ? 'bg-[#E3F2FD]'
                            : 'bg-white hover:bg-[#F5F5F5]'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentSlide}-${q.id}`}
                          value={option.value}
                          checked={currentAnswers[q.id] === option.value}
                          onChange={() => handleAnswerChange(q.id, option.value)}
                          disabled={submitted}
                          className="w-4 h-4"
                        />
                        <span className="text-[#333]">{option.label}</span>
                        {submitted && option.value === q.correctAnswer && (
                          <span className="ml-auto text-[#4CAF50]">✓</span>
                        )}
                      </label>
                    ))}
                  </div>

                  {/* Answer Hint - shown for slide 1 questions */}
                  {q.answerHint && (
                    <p className="mt-3 text-sm text-[#4CAF50] flex items-center gap-1">
                      <strong>Answer hint:</strong> {q.answerHint} <span className="text-[#4CAF50]">✓</span>
                    </p>
                  )}

                  {submitted && isWrong && (
                    <p className="mt-3 text-sm text-[#D32F2F]">
                      <strong>Correct answer:</strong>{' '}
                      {q.options.find((o) => o.value === q.correctAnswer)?.label}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation and Action Buttons */}
          <div className="flex justify-between items-center gap-4">
            {/* Left side - Previous / Back */}
            <div>
              {currentSlide === 2 && !submitted && (
                <button
                  onClick={() => setCurrentSlide(1)}
                  className="bg-[#9E9E9E] hover:bg-[#757575] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200"
                >
                  ← Previous
                </button>
              )}
            </div>

            {/* Center/Right - Next / Submit / Retry */}
            <div className="flex gap-4 ml-auto">
              {!submitted ? (
                currentSlide === 1 ? (
                  <button
                    onClick={() => setCurrentSlide(2)}
                    disabled={!allSlide1Answered}
                    className={`text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg ${
                      allSlide1Answered
                        ? 'bg-[#2196F3] hover:bg-[#1976D2] hover:scale-105'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!allAnswered}
                    className={`text-white text-lg font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg ${
                      allAnswered
                        ? 'bg-[#4CAF50] hover:bg-[#388E3C] hover:scale-105'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Submit Answers
                  </button>
                )
              ) : (
                <>
                  {currentSlide === 1 && (
                    <button
                      onClick={() => setCurrentSlide(2)}
                      className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200"
                    >
                      View Slide 2 →
                    </button>
                  )}
                  {currentSlide === 2 && (
                    <button
                      onClick={() => setCurrentSlide(1)}
                      className="bg-[#9E9E9E] hover:bg-[#757575] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200"
                    >
                      ← View Slide 1
                    </button>
                  )}
                  <button
                    onClick={handleRetry}
                    className="bg-[#FF9800] hover:bg-[#F57C00] text-white text-lg font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    Try Again
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Slide Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setCurrentSlide(1)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === 1 ? 'bg-[#4CAF50] scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label="Go to slide 1"
            />
            <button
              onClick={() => setCurrentSlide(2)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === 2 ? 'bg-[#4CAF50] scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label="Go to slide 2"
            />
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

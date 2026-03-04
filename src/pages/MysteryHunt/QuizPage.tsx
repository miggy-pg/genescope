import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenescopeLayout from '@/components/GeneScope/GenescopeLayout';

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string }[];
  correctAnswer: string;
  reviewNote?: string;
}

const questions: Question[] = [
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
  // Scenario-based / Ethics Questions
  {
    id: 7,
    question: 'Hospital Responsibility: If two babies were switched by mistake at the hospital. What should the hospital staff do first?',
    options: [
      { label: 'a) Ignore it and hope no one notices', value: 'a' },
      { label: 'b) Tell the parents and help the babies safe', value: 'b' },
      { label: 'c) Blame the nurses', value: 'c' },
      { label: 'd) Put posters online to ask people for help', value: 'd' },
    ],
    correctAnswer: 'b',
    reviewNote: 'Think about keeping the babies safe.',
  },
  {
    id: 8,
    question: 'Parents\' Rights: If the hospital doesn\'t know which baby is theirs. How should the hospital treat the parents?',
    options: [
      { label: 'a) Tell them to leave and wait outside', value: 'a' },
      { label: 'b) Keep it a secret', value: 'b' },
      { label: 'c) Let them see both babies and speak kindly', value: 'c' },
      { label: 'd) Ask them to solve the mystery themselves', value: 'd' },
    ],
    correctAnswer: 'c',
    reviewNote: 'Think about fairness and respect.',
  },
  {
    id: 9,
    question: 'Privacy and Safety: Why should no one share pictures or personal information about the babies online?',
    options: [
      { label: 'a) It could put the babies in danger', value: 'a' },
      { label: 'b) It would make the hospital famous', value: 'b' },
      { label: 'c) It is not important at all', value: 'c' },
      { label: 'd) It would help find the parents faster', value: 'd' },
    ],
    correctAnswer: 'a',
    reviewNote: 'Think about safety.',
  },
  {
    id: 10,
    question: 'Observing Traits: In the mystery, looking at eye color, hair, and skin can help the parents?',
    options: [
      { label: 'a) It helps parents figure out which baby is theirs', value: 'a' },
      { label: 'b) It gives the hospital money', value: 'b' },
      { label: 'c) It changes the baby\'s appearance', value: 'c' },
      { label: 'd) It makes the nurse cry', value: 'd' },
    ],
    correctAnswer: 'a',
    reviewNote: 'Think about how you knew which baby belongs to which parents.',
  },
  {
    id: 11,
    question: 'Learning from Mistakes: After solving the mystery, what can hospitals do to avoid swapping babies next time?',
    options: [
      { label: 'a) Stop having babies in hospitals', value: 'a' },
      { label: 'b) Use special wristbands or ID tags for each baby', value: 'b' },
      { label: 'c) Let the babies choose their parents', value: 'c' },
      { label: 'd) Ask the babies to stay quiet', value: 'd' },
    ],
    correctAnswer: 'b',
    reviewNote: 'Think about rules and checking carefully.',
  },
];

export default function QuizPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId: number, value: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const allAnswered = questions.every((q) => answers[q.id]);

  return (
    <GenescopeLayout>
      <div className="flex-1 flex flex-col items-center px-4 py-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-[#333] mb-2">
            🔍 Detective's Quiz: Test Your Genetics Skills
          </h1>

          {/* Instructions */}
          <div className="bg-[#E3F2FD] rounded-xl p-4 mb-6">
            <p className="text-[#1565C0]">
              <strong>Instructions:</strong><br />
              Answer the questions below based on what you observed in the mystery case and what you learned about traits, genotypes, phenotypes, and ethical/safety issues.
            </p>
          </div>

          {/* Score Display (when submitted) */}
          {submitted && (
            <div
              className={`rounded-xl p-6 mb-6 ${
                score === questions.length
                  ? 'bg-[#E8F5E9]'
                  : score >= questions.length / 2
                  ? 'bg-[#FFF3E0]'
                  : 'bg-[#FFEBEE]'
              }`}
            >
              <div className="text-center">
                <p className="text-4xl mb-2">
                  {score === questions.length ? '🎉' : score >= questions.length / 2 ? '👍' : '📚'}
                </p>
                <p className="text-2xl font-bold mb-2">
                  You scored {score} out of {questions.length}!
                </p>
                <p className="text-[#555]">
                  {score === questions.length
                    ? "Perfect! You're a true genetics detective!"
                    : score >= questions.length / 2
                    ? 'Good job! Review the questions you missed.'
                    : 'Keep learning! Review the Case Analysis to improve.'}
                </p>
              </div>
            </div>
          )}

          {/* Questions */}
          <div className="space-y-6 mb-8">
            {questions.map((q, index) => {
              const isCorrect = submitted && answers[q.id] === q.correctAnswer;
              const isWrong = submitted && answers[q.id] && answers[q.id] !== q.correctAnswer;

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
                  <p className="font-bold text-[#333] mb-4">
                    {index + 1}. {q.question}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          submitted
                            ? option.value === q.correctAnswer
                              ? 'bg-[#C8E6C9]'
                              : answers[q.id] === option.value
                              ? 'bg-[#FFCDD2]'
                              : 'bg-white'
                            : answers[q.id] === option.value
                            ? 'bg-[#E3F2FD]'
                            : 'bg-white hover:bg-[#F5F5F5]'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={option.value}
                          checked={answers[q.id] === option.value}
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

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            {!submitted ? (
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
            ) : (
              <button
                onClick={handleRetry}
                className="bg-[#FF9800] hover:bg-[#F57C00] text-white text-lg font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
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

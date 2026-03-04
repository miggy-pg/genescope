import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import HomePage from '@/pages/HomePage';
import WelcomePage from '@/pages/WelcomePage';
import StartAdventurePage from '@/pages/StartAdventurePage';
import MysteryHuntIntroPage from '@/pages/MysteryHunt/MysteryHuntIntroPage';
import InterviewParentsPage from '@/pages/MysteryHunt/InterviewParentsPage';
import MatchBabiesPage from '@/pages/MysteryHunt/MatchBabiesPage';
import CaseAnalysisPage from '@/pages/MysteryHunt/CaseAnalysisPage';
import QuizPage from '@/pages/MysteryHunt/QuizPage';

function AppContent() {
  const location = useLocation();
  const isGenescopePage = location.pathname === '/' || location.pathname.startsWith('/genescope');

  return (
    <div className="min-h-screen">
      {!isGenescopePage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genescope" element={<HomePage />} />
        <Route path="/genescope/welcome" element={<WelcomePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/genescope/start-adventure" element={<StartAdventurePage />} />
        <Route path="/genescope/mystery-hunt" element={<MysteryHuntIntroPage />} />
        <Route path="/genescope/mystery-hunt/interview" element={<InterviewParentsPage />} />
        <Route path="/genescope/mystery-hunt/match" element={<MatchBabiesPage />} />
        <Route path="/genescope/mystery-hunt/case-analysis" element={<CaseAnalysisPage />} />
        <Route path="/genescope/mystery-hunt/quiz" element={<QuizPage />} />
        {/* Direct access routes from GeneScope dashboard */}
        <Route path="/genescope/case-analysis" element={<CaseAnalysisPage />} />
        <Route path="/genescope/case-analysis/quiz" element={<QuizPage />} />
        <Route path="/genescope/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return <AppContent />;
}

// Placeholder pages for Phase 2
function CategoryPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-encarta-gradient-radial p-8">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-encarta p-8 shadow-encarta">
        <h1 className="font-display text-3xl text-encarta-text-dark mb-4">
          Category Page
        </h1>
        <p className="text-encarta-text-dark">
          This page will display articles for the selected category. Coming in Phase 2!
        </p>
      </div>
    </main>
  );
}

function SearchPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-encarta-gradient-radial p-8">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-encarta p-8 shadow-encarta">
        <h1 className="font-display text-3xl text-encarta-text-dark mb-4">
          Search Results
        </h1>
        <p className="text-encarta-text-dark">
          Search functionality will be implemented in Phase 2!
        </p>
      </div>
    </main>
  );
}

export default App;

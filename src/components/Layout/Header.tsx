import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '@/store/useStore';
import SearchBar from '@/components/Search/SearchBar';

export default function Header() {
  const navigate = useNavigate();
  const { setSearchQuery } = useStore();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="bg-gradient-to-r from-encarta-green to-encarta-green-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="nav-btn flex items-center justify-center w-12 h-12 bg-encarta-yellow hover:bg-encarta-yellow-light"
              title="Home"
            >
              <svg
                className="w-6 h-6 text-encarta-text-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="nav-btn flex items-center justify-center w-10 h-10"
              title="Go Back"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => navigate(1)}
              className="nav-btn flex items-center justify-center w-10 h-10"
              title="Go Forward"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <div className="hidden sm:block">
                <span className="font-display text-xl text-white">Encarta</span>
                <span className="font-display text-lg text-encarta-yellow ml-1">kids</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

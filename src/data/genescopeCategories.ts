export interface GenescopeCategory {
  id: string;
  name: string;
  slug: string;
  color: string;
  textColor: string;
}

export const genescopeCategories: GenescopeCategory[] = [
  {
    id: 'welcome',
    name: 'Welcome!',
    slug: 'welcome',
    color: '#3B82F6', // blue
    textColor: 'white',
  },
  {
    id: 'start-adventure',
    name: 'Start Adventure',
    slug: 'start-adventure',
    color: '#F97316', // orange
    textColor: 'white',
  },
  {
    id: 'mystery-hunt',
    name: 'Mystery Hunt',
    slug: 'mystery-hunt',
    color: '#8B5CF6', // purple
    textColor: 'white',
  },
  {
    id: 'case-analysis',
    name: 'Case Analysis',
    slug: 'case-analysis',
    color: '#EC4899', // pink/magenta
    textColor: 'white',
  },
  {
    id: 'build-a-family',
    name: 'Build a Family',
    slug: 'build-a-family',
    color: '#06B6D4', // cyan
    textColor: 'white',
  },
  {
    id: 'journal',
    name: 'Journal',
    slug: 'journal',
    color: '#22C55E', // green
    textColor: 'black',
  },
  {
    id: 'progress',
    name: 'Progress',
    slug: 'progress',
    color: '#FACC15', // yellow
    textColor: 'black',
  },
];

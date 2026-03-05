-- Supabase Database Schema for GeneScope Quizzes
-- Run this SQL in your Supabase SQL Editor to create the tables

-- ============================================
-- Table: case_analysis_quiz_scores
-- Description: Stores scores from the Case Analysis Quiz
-- ============================================
CREATE TABLE IF NOT EXISTS case_analysis_quiz_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name VARCHAR(255),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL DEFAULT 11,
  percentage DECIMAL(5,2) NOT NULL,
  slide1_score INTEGER NOT NULL DEFAULT 0,
  slide2_score INTEGER NOT NULL DEFAULT 0,
  answers JSONB NOT NULL DEFAULT '{}',
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries by date
CREATE INDEX IF NOT EXISTS idx_case_analysis_quiz_completed_at
ON case_analysis_quiz_scores(completed_at DESC);

-- Index for faster queries by student name
CREATE INDEX IF NOT EXISTS idx_case_analysis_quiz_student_name
ON case_analysis_quiz_scores(student_name);

-- ============================================
-- Table: mystery_hunt_quiz_scores (for future use)
-- Description: Stores scores from the Mystery Hunt Quiz
-- ============================================
CREATE TABLE IF NOT EXISTS mystery_hunt_quiz_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name VARCHAR(255),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  answers JSONB NOT NULL DEFAULT '{}',
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_mystery_hunt_quiz_completed_at
ON mystery_hunt_quiz_scores(completed_at DESC);

CREATE INDEX IF NOT EXISTS idx_mystery_hunt_quiz_student_name
ON mystery_hunt_quiz_scores(student_name);

-- ============================================
-- Enable Row Level Security (RLS)
-- ============================================
ALTER TABLE case_analysis_quiz_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE mystery_hunt_quiz_scores ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS Policies - Allow public insert and select
-- (Adjust these based on your security requirements)
-- ============================================

-- Case Analysis Quiz Policies
CREATE POLICY "Allow public insert on case_analysis_quiz_scores"
ON case_analysis_quiz_scores
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow public select on case_analysis_quiz_scores"
ON case_analysis_quiz_scores
FOR SELECT
TO anon
USING (true);

-- Mystery Hunt Quiz Policies
CREATE POLICY "Allow public insert on mystery_hunt_quiz_scores"
ON mystery_hunt_quiz_scores
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow public select on mystery_hunt_quiz_scores"
ON mystery_hunt_quiz_scores
FOR SELECT
TO anon
USING (true);

-- ============================================
-- Helper Views (optional)
-- ============================================

-- View: Top scores for Case Analysis Quiz
CREATE OR REPLACE VIEW case_analysis_top_scores AS
SELECT
  student_name,
  score,
  total_questions,
  percentage,
  completed_at
FROM case_analysis_quiz_scores
WHERE student_name IS NOT NULL
ORDER BY percentage DESC, completed_at ASC
LIMIT 100;

-- View: Recent quiz attempts
CREATE OR REPLACE VIEW recent_quiz_attempts AS
SELECT
  'case_analysis' as quiz_type,
  student_name,
  score,
  total_questions,
  percentage,
  completed_at
FROM case_analysis_quiz_scores
UNION ALL
SELECT
  'mystery_hunt' as quiz_type,
  student_name,
  score,
  total_questions,
  percentage,
  completed_at
FROM mystery_hunt_quiz_scores
ORDER BY completed_at DESC
LIMIT 50;

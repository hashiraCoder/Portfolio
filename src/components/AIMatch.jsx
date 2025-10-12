import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaRobot } from 'react-icons/fa';

const AIMatch = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!jobDescription) {
      setError('Please paste a job description first.');
      return;
    }
    setIsLoading(true);
    setError('');
    setAnalysis('');

    try {
      const response = await axios.post('/api/ai/analyze', { jobDescription });
      setAnalysis(response.data.analysis);
    } catch (err) {
      setError('Failed to get analysis. The server might be busy.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 md:px-16 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        AI Recruiter <span className="text-neon-blue">Assistant</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
          <p className="text-gray-300 mb-4 text-center">
            Paste a job description below, and my AI assistant will analyze how well my skills match the role.
          </p>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here..."
            className="w-full h-48 p-3 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-blue resize-none"
          />
          <button
            onClick={handleAnalyze}
            disabled={isLoading}
            className="w-full mt-4 px-6 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? 'Analyzing...' : <><FaRobot /> Analyze Match</>}
          </button>
        </div>

        {/* Results Section */}
        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white/5 p-8 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-neon-blue">Analysis Result:</h3>
            {/* Using a <pre> tag to preserve the Markdown formatting */}
            <pre className="text-gray-300 whitespace-pre-wrap font-sans">{analysis}</pre>
          </motion.div>
        )}
        {error && <p className="text-center text-red-400 mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default AIMatch;
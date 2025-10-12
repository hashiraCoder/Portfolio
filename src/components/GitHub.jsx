import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import axios from 'axios';
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

const GitHub = () => {
  // IMPORTANT: Replace with your GitHub username
  const GITHUB_USERNAME = 'hashiraCoder';

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`
        );
        setRepos(response.data);
      } catch (err) {
        setError('Failed to fetch GitHub repositories.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [GITHUB_USERNAME]);

  return (
    <section className="py-20 px-4 md:px-16 lg:px-32">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Days I <span className="text-neon-blue">Code</span>
      </motion.h2>

      {/* GitHub Calendar */}
      <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-12">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
          fontSize={16}
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My Latest <span className="text-neon-purple">Repositories</span>
      </motion.h2>
      
      {/* Repositories Grid */}
      {loading && <p className="text-center">Loading repositories...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {!loading && !error && repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/5 p-6 rounded-lg border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-neon-purple hover:shadow-glow-purple"
          >
            <div>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-neon-blue">{repo.name}</h3>
                <FaExternalLinkAlt />
              </a>
              <p className="text-gray-400 text-sm mb-4">{repo.description || 'No description provided.'}</p>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-1"><FaStar /> {repo.stargazers_count}</span>
              <span className="flex items-center gap-1"><FaCodeBranch /> {repo.forks_count}</span>
              <span className="ml-auto">{repo.language}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GitHub;
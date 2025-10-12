import React from 'react';
import Terminal from 'react-console-emulator';
import { aboutText, projectData, socialLinks } from '../data';

const WebTerminal = ({ closeTerminal }) => {
  const commands = {
    // Renamed 'help' to 'menu' to avoid conflict
    menu: {
      description: 'Lists all custom portfolio commands.',
      fn: () => `
Custom Commands:
  menu          - Lists these custom commands.
  about         - Shows a short bio.
  projects      - Lists all my featured projects.
  contact       - Displays my social media links.
  
(You can also use built-in commands like 'clear' and 'help')
      `,
    },
    about: {
      description: 'Shows a short bio.',
      fn: () => aboutText || 'About information is not available.',
    },
    projects: {
      description: 'Lists all my featured projects.',
      fn: () => {
        if (!projectData || projectData.length === 0) {
          return 'No projects found.';
        }
        return projectData.map(p => `- ${p.title}: ${p.desc}\n  GitHub: ${p.github}`).join('\n');
      },
    },
    contact: {
      description: 'Displays my social media links.',
      fn: () => {
        if (!socialLinks || socialLinks.length === 0) {
          return 'No social links found.';
        }
        return socialLinks.map(s => `- ${s.name}: ${s.href}`).join('\n');
      },
    },
  };

  return (
    <Terminal
      // 'noDefaults' prop is removed
      commands={commands}
      welcomeMessage={"Welcome! Type 'menu' for custom commands or 'help' for all commands."}
      promptLabel={'shivam@portfolio:~$'}
      style={{
        backgroundColor: 'rgba(14, 14, 16, 0.8)',
        backdropFilter: 'blur(10px)',
        minHeight: '100%',
        width: '100%',
        boxShadow: '0 0 25px rgba(0, 191, 255, 0.5)',
        border: '1px solid rgba(0, 191, 255, 0.3)',
      }}
      promptLabelStyle={{ color: '#00BFFF' }} // Neon Blue
      inputStyle={{ color: '#E0E0E0' }}
    />
  );
};

export default WebTerminal;
import { FaLinkedin, FaGithub,FaEnvelope } from 'react-icons/fa';
import { SiCodechef, SiTryhackme } from 'react-icons/si';

export const aboutText = "I am a passionate MERN stack developer and certified cybersecurity expert. With a knack for building robust and secure web applications, I transform complex problems into elegant, user-friendly solutions.";

export const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/unnati-welfare-society/'},
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/hashiraCoder' },
  { name: 'CodeChef', icon: <SiCodechef />, href: 'https://www.codechef.com/users/smack_whirl_82' },
  { name: 'TryHackMe', icon: <SiTryhackme />, href: 'https://tryhackme.com/p/kshivam' },
  { name: 'Email', icon: <FaEnvelope />, href: 'mailto:shivamkumar.code@gmail.com' },
];

export const projectData = [
  { title: "E-Commerce Platform", desc: "A full-stack MERN e-commerce site.", stack: ["React", "Node.js", "MongoDB"], live: "#", github: "#", img: "https://via.placeholder.com/400x300" },
  { title: "Cyber Threat Intel", desc: "Real-time threat intelligence dashboard.", stack: ["React", "Express", "APIs"], live: "#", github: "#", img: "https://via.placeholder.com/400x300" },
  { title: "College CTF Website", desc: "Vulnerable website for a CTF event.", stack: ["HTML", "CSS", "JS", "PHP"], live: "#", github: "#", img: "https://via.placeholder.com/400x300" }
];
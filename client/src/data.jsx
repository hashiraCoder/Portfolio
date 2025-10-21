import { FaLinkedin, FaGithub,FaEnvelope } from 'react-icons/fa';
import { SiCodechef, SiTryhackme } from 'react-icons/si';

export const aboutText = "I am a passionate MERN stack developer and cybersecurity enthusiast. With a knack for building robust and secure web applications, I transform complex problems into elegant, user-friendly solutions.I am a hardworking coder";

export const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/shivam-kumar-986459343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/hashiraCoder' },
  { name: 'CodeChef', icon: <SiCodechef />, href: 'https://www.codechef.com/users/smack_whirl_82' },
  { name: 'TryHackMe', icon: <SiTryhackme />, href: 'https://tryhackme.com/p/kshivam' },
  { name: 'Email', icon: <FaEnvelope />, href: 'mailto:shivamkumar.code@gmail.com' },
];

export const projectData = [
  { title: "Modern Portfolio", desc: "A full-stack MERN portfolio.", stack: ["React", "Node.js", "MongoDB"], live: "#", github: "#"}
  // { title: "Modern Portfolio", desc: "A full-stack MERN portfolio.", stack: ["React", "Node.js", "MongoDB"], live: "#", github: "#", img: "https://via.placeholder.com/400x300" }
];
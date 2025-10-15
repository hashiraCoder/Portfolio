// /client/src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`, 
        formData
      );
      if (response.data.success) {
        toast.success('Message sent successfully!', { id: toastId });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message.', { id: toastId });
    } finally {
      setIsSubmitting(false);
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
            Get In <span className="text-neon-purple">Touch</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto p-8 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
        >
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-blue"/>
                </div>
                <div className="mb-4">
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-blue"/>
                </div>
                <div className="mb-4">
                    <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required className="w-full p-3 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-blue"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </motion.div>
    </section>
  );
};

export default Contact;
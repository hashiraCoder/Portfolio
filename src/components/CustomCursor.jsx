// /client/src/components/CustomCursor.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <motion.div
            className="hidden md:block w-8 h-8 border-2 border-neon-blue rounded-full fixed top-0 left-0 z-50 pointer-events-none"
            animate={{ x: position.x - 16, y: position.y - 16 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
    );
};

export default CustomCursor;
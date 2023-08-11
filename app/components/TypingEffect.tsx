import React, { useState, useEffect, FC } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number; // interval in milliseconds
}

const TypingEffect: FC<TypingEffectProps> = ({ text, typingSpeed = 100 }) => {
  const [visibleText, setVisibleText] = useState<string>('');

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index < text.length) {
        setVisibleText((prevText) => prevText + text.charAt(index));
        index++;
      }

      if (index === text.length) {
        clearInterval(interval);  // Stops the interval when the text is fully typed out
      }
    };

    const interval = setInterval(typeText, typingSpeed);

    return () => clearInterval(interval); // Cleanup
  }, [text, typingSpeed]);

  return (
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {visibleText}
    </motion.p>
  );
};

export default TypingEffect;

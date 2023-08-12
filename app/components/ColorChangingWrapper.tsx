
import React, { ReactNode,CSSProperties } from 'react';
import { motion } from 'framer-motion';

interface ColorChangingWrapperProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const ColorChangingWrapper: React.FC<ColorChangingWrapperProps> = ({ children, size = 'medium' }) => {
  // Define an array of hex colors you'd like to transition between
  const colors = ['#483D8B', '#7B68EE', '#3357FF', '#9370DB', '#9370DB',	'#808080'];
  
  // Define the keyframes for the color animation
  const colorKeyframes = [...colors, colors[0]]; // Add the first color again to the end to complete the loop
  let fontSize: string;
  switch(size) {
    case 'small':
      fontSize = '1rem';
      break;
    case 'large':
      fontSize = '2.5rem';
      break;
    case 'medium':
    default:
      fontSize = '1.85rem';
      break;
  }
  const styles: CSSProperties = {
    fontSize,
    fontFamily: 'sans-serif',
    fontWeight:'bold',
  };

  return (
    <motion.div
      // Transition configuration
      transition={{
        duration: colors.length, // Duration based on the number of colors
        repeat: Infinity,        // Repeat the animation infinitely
        ease: "linear"           // Linear transition for a seamless loop
      }}
      // Animate the color using keyframes
      animate={{ color: colorKeyframes }}
      style={styles}
    >
      {children}
    </motion.div>
  );
}

export default ColorChangingWrapper;

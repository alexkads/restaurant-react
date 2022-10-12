// fadeIn function
export const fadeIn = (direction) => {
  return {
    hidden: {
      x: direction === 'left' ? 90 : direction === 'right' ? -90 : 0,
      y: direction === 'up' ? 90 : direction === 'down' ? -90 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 3,
        damping: 5,
        stiffness: 100,
        // ease: [0.15, 0.15, 0.15, 0.75],
        // ease: [0, 0.55, 0.45, 1],
      },
    },
  };
};

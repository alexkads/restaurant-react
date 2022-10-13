export const fadeIn = (direction) => {
  return {
    hidden: {
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        // ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const headerStaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1,
    },
  },
};

export const heroStaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 2,
    },
  },
};

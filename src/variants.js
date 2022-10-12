// fadeIn function
export const fadeIn = (direction) => {
  return {
    hidden: {
      x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
      y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const opacity = {
  hidden: {
    opacity: 0,
    // rotate: 126,
  },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
};

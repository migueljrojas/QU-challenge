const planetVariants = {
  initial: {
    opacity: 0,
    y: '100px'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      ease: 'easeOut'
    },
  },
  exit: {
    opacity: 0,
    y: '100px',
    transition: {
      ease: 'easeIn'
    }
  }
};

export {
  planetVariants
};
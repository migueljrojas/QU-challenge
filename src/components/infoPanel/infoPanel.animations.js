const panelVariants = {
  initial: {
    x: '100%'
  },
  animate: {
    x: 0,
    transition: {
      duration: .5,
      ease: 'easeInOut'
    }
  },
  exit: {
    x: '100%',
    transition: {
      duration: .5,
      ease: 'easeInOut'
    }
  }
};

export { panelVariants };
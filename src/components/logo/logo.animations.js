
const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      delay: 1.5,
      ease: "easeInOut"
    }
  },
};

const strokeVariants = {
  initial: {
    opacity: 1,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 5,
      ease: "easeInOut"
    }
  },
};

export { pathVariants, strokeVariants };
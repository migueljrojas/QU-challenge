const universeVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: .1
    }
  },
  exit: {
    opacity: 1
  }
};

const fadeInVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1
    }
  }
}

export {
  universeVariants,
  fadeInVariants
}
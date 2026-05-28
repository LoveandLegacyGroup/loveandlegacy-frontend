import React from 'react';
import { motion } from 'framer-motion';

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerVariants = {
  hidden: { opacity: 1 },
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const FadeUp = ({ children, className = '', delay = 0, as = 'div', ...rest }) => {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ ...fadeUpVariants, show: { ...fadeUpVariants.show, transition: { ...fadeUpVariants.show.transition, delay } } }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export const StaggerGroup = ({ children, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
    variants={staggerVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeUp;

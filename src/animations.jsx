import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const viewportOpts = { once: true, margin: '-80px' };

export function FadeUp({ children, delay = 0, duration = 0.7, className }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, duration = 0.8, className }) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, direction = 'left', delay = 0, duration = 0.7, className }) {
  const variant = direction === 'left' ? slideLeft : slideRight;
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, delay = 0 }) {
  return (
    <motion.div
      variants={{ ...staggerContainer, visible: { transition: { staggerChildren: 0.1, delayChildren: delay } } }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, direction = 'up' }) {
  const variant = direction === 'up' ? fadeUp : fadeIn;
  return (
    <motion.div
      variants={variant}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

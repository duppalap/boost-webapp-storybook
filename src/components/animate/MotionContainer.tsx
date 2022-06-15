import { motion } from 'framer-motion';
// material
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface MotionContainerProps extends BoxProps {
  initial?: boolean | string;
  open?: boolean;
}

export default function MotionContainer({ open, children, ...other }: MotionContainerProps) {
  const varWrapEnter = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}

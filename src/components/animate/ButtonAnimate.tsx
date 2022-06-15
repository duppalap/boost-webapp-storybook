// material
import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';

// ----------------------------------------------------------------------

interface ButtonAnimateProps extends BoxProps {
  mediumClick?: boolean;
}

// ----------------------------------------------------------------------

export const varHover = {
  hover: { scale: 1.1 }
};

export default function ButtonAnimate({
  mediumClick = false,
  children,
  sx,
  ...other
}: ButtonAnimateProps) {
  const varSmallClick = {
    hover: { scale: 1.04 },
    tap: { scale: 0.96 }
  };

  const varMediumClick = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };
  return (
    <Box
      component={motion.div}
      whileTap="tap"
      whileHover="hover"
      variants={mediumClick ? varMediumClick : varSmallClick}
      sx={{ display: 'inline-flex', ...sx }}
      {...other}
    >
      {children}
    </Box>
  );
}

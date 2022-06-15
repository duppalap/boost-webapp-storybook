import { alpha, IconButton, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { combine } from '../../utils/datePicker';

interface DayProps {
  filled?: boolean;
  outlined?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  startOfRange?: boolean;
  endOfRange?: boolean;
  onClick?: () => void;
  onHover?: () => void;
  value: number | string;
}

const Day: React.FunctionComponent<DayProps> = ({
  startOfRange,
  endOfRange,
  disabled,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value
}: DayProps) => {
  const theme = useTheme();
  const useStyles = makeStyles(() => ({
    leftBorderRadius: {
      borderRadius: '50% 0 0 50%'
    },
    rightBorderRadius: {
      borderRadius: '0 50% 50% 0'
    },
    buttonContainer: {
      display: 'flex'
    },
    button: {
      height: 36,
      width: 36,
      padding: 0
    },
    buttonText: {
      lineHeight: 1.6
    },
    outlined: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    filled: {
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      },
      backgroundColor: theme.palette.primary.main
    },
    highlighted: {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    },
    contrast: {
      color: theme.palette.primary.contrastText
    }
  }));

  const classes = useStyles();

  return (
    <div
      className={combine(
        classes.buttonContainer,
        startOfRange && classes.leftBorderRadius,
        endOfRange && classes.rightBorderRadius,
        !disabled && highlighted && classes.highlighted
      )}
    >
      <IconButton
        className={combine(
          classes.button,
          !disabled && outlined && classes.outlined,
          !disabled && filled && classes.filled
        )}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onHover}
      >
        <Typography
          color={!disabled ? 'textPrimary' : 'textSecondary'}
          className={combine(classes.buttonText, !disabled && filled && classes.contrast)}
          variant="body2"
        >
          {value}
        </Typography>
      </IconButton>
    </div>
  );
};

export default Day;

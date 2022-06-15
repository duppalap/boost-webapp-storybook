import React from 'react';
import { alpha, List, ListItemButton, ListItemText, useTheme } from '@mui/material';
import { isSameDay } from 'date-fns';

// eslint-disable-next-line no-unused-vars
import { DefinedRange, DateRange } from '../../@types/datePicker';

type DefinedRangesProps = {
  setRange: (range: DateRange) => void;
  selectedRange: DateRange;
  ranges: DefinedRange[];
};

const isSameRange = (first: DateRange, second: DateRange) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
  }
  return false;
};

const DefinedRanges: React.FunctionComponent<DefinedRangesProps> = ({
  ranges,
  setRange,
  selectedRange
}: DefinedRangesProps) => {
  const theme = useTheme();

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' }
  };

  return (
    <List>
      {ranges.map((range, idx) => (
        <ListItemButton sx={{ m: 1 }} key={idx} onClick={() => setRange(range)}>
          <ListItemText
            sx={{
              ...(isSameRange(range, selectedRange) && activeRootStyle)
            }}
            primaryTypographyProps={{
              style: {
                fontWeight: isSameRange(range, selectedRange) ? 'bold' : 'normal'
              }
            }}
          >
            {range.label}
          </ListItemText>
        </ListItemButton>
      ))}
    </List>
  );
};

export default DefinedRanges;

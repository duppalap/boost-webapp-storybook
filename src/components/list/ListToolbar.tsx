import { Icon } from '@iconify/react';

// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Toolbar, OutlinedInput, InputAdornment } from '@mui/material';
import { ReactNode } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 320, boxShadow: 2 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

// ----------------------------------------------------------------------

type ListToolbarProps = {
  filterName: string;
  action?: ReactNode;
  onFilterName: (value: string) => void;
};

export default function ListToolbar({ filterName, action, onFilterName }: ListToolbarProps) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle
      sx={{
        color: isLight ? 'primary.main' : 'text.primary'
      }}
    >
      <SearchStyle
        value={filterName}
        onChange={(e) => onFilterName(e.target.value)}
        placeholder={`Search ...`}
        startAdornment={
          <InputAdornment position="start">
            <Box component={Icon} icon={'eva:search-fill'} sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
      />
      <Box sx={{ flexShrink: 0 }}>{action}</Box>
    </RootStyle>
  );
}

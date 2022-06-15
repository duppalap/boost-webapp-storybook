import { Icon } from '@iconify/react';
import { Box, GlobalStyles } from '@mui/material';
// material
import { alpha, useTheme } from '@mui/material/styles';
import { autoHideDuration } from 'config';
import { SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';
// @types
import { ColorSchema } from '../@types/theme';

// ----------------------------------------------------------------------

function SnackbarStyles() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <GlobalStyles
      styles={{
        '#root': {
          '& .SnackbarContent-root': {
            width: '100%',
            padding: theme.spacing(1.5),
            margin: theme.spacing(0.25, 0),
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey[isLight ? 0 : 800],
            backgroundColor: theme.palette.grey[isLight ? 900 : 0],
            '&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo':
              {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper
              }
          },
          '& .SnackbarItem-message': {
            padding: '0 !important',
            fontWeight: theme.typography.fontWeightMedium
          },
          '& .SnackbarItem-action': {
            marginRight: 0,
            color: theme.palette.action.active,
            '& svg': { width: 20, height: 20 }
          }
        }
      }}
    />
  );
}

type SnackbarIconProps = {
  icon: string;
  color: ColorSchema;
};

function SnackbarIcon({ icon, color }: SnackbarIconProps) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16)
      }}
    >
      <Icon icon={icon} width={24} height={24} />
    </Box>
  );
}

type NotistackProviderProps = {
  children: ReactNode;
};

export default function NotistackProvider({ children }: NotistackProviderProps) {
  return (
    <>
      <SnackbarStyles />

      <SnackbarProvider
        dense
        maxSnack={5}
        autoHideDuration={autoHideDuration}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        iconVariant={{
          success: <SnackbarIcon icon={'eva:checkmark-circle-2-fill'} color="success" />,
          error: <SnackbarIcon icon={'eva:alert-triangle-fill'} color="error" />,
          warning: <SnackbarIcon icon={'eva:info-fill'} color="warning" />,
          info: <SnackbarIcon icon={'eva:alert-circle-fill'} color="info" />
        }}
      >
        {children}
      </SnackbarProvider>
    </>
  );
}

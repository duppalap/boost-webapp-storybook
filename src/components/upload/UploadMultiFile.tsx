import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Stack,
  Typography
} from '@mui/material';
// material
import { alpha, styled, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { AnimatePresence, motion } from 'framer-motion';
import { isString } from 'lodash';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { UploadIllustration } from '../../assets';
// utils
import { fData } from '../../utils/formatNumber';
//
import { MIconButton } from '../@material-extend';

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
  [theme.breakpoints.up('md')]: { textAlign: 'left', flexDirection: 'row' }
}));

// ----------------------------------------------------------------------

export interface CustomFile extends File {
  id?: number;
  path?: string;
  preview?: string;
}

interface UploadMultiFileProps extends DropzoneOptions {
  error?: boolean;
  files: (File | string)[];
  fileToUpload: (File | string)[];
  showPreview: boolean;
  onRemove: (file: File | string) => void;
  onRemoveAll: VoidFunction;
  save?: VoidFunction;
  sx?: SxProps<Theme>;
}

const getFileData = (file: CustomFile | string) => {
  if (typeof file === 'string') {
    return {
      key: file
    };
  }
  return {
    key: file.id,
    name: file.name,
    size: file.size,
    preview: file.preview
  };
};

export default function UploadMultiFile({
  error,
  showPreview = false,
  files,
  onRemove,
  onRemoveAll,
  fileToUpload,
  save = () => null,
  sx,
  ...other
}: UploadMultiFileProps) {
  const hasFile = fileToUpload.length > 0;

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    ...other
  });

  const TRANSITION_ENTER = {
    duration: 0.64,
    ease: [0.43, 0.13, 0.23, 0.96]
  };

  const TRANSITION_EXIT = {
    duration: 0.48,
    ease: [0.43, 0.13, 0.23, 0.96]
  };

  const DISTANCE = 120;

  const varFadeInRight = {
    initial: { x: DISTANCE, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER },
    exit: { x: DISTANCE, opacity: 0, transition: TRANSITION_EXIT }
  };

  const getFileListPreview = (hasFile: any, fileArray: any[], showPreview: boolean) => (
    <List disablePadding sx={{ ...(hasFile && { my: 3 }) }}>
      <AnimatePresence>
        {fileArray.map((file) => {
          const { key, name, size, preview } = getFileData(file as CustomFile);
          if (showPreview) {
            return (
              <ListItem
                key={key}
                component={motion.div}
                {...varFadeInRight}
                sx={{
                  p: 0,
                  m: 0.5,
                  width: 80,
                  height: 80,
                  borderRadius: 1.5,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'inline-flex'
                }}
              >
                <Paper
                  variant="outlined"
                  component="img"
                  src={preview}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
                />
                <Box sx={{ top: 6, right: 6, position: 'absolute' }}>
                  <MIconButton
                    size="small"
                    onClick={() => onRemove(file)}
                    sx={{
                      p: '2px',
                      color: 'common.white',
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                      '&:hover': {
                        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48)
                      }
                    }}
                  >
                    <Icon icon={'eva:close-fill'} />
                  </MIconButton>
                </Box>
              </ListItem>
            );
          }

          return (
            <ListItem
              key={key}
              component={motion.div}
              {...varFadeInRight}
              sx={{
                my: 1,
                py: 0.75,
                px: 2,
                borderRadius: 1,
                border: (theme) => `solid 1px ${theme.palette.divider}`,
                bgcolor: 'background.paper'
              }}
            >
              <ListItemIcon>
                <Icon icon={'eva:file-fill'} width={28} height={28} />
              </ListItemIcon>
              <ListItemText
                primary={isString(file) ? file : name}
                secondary={isString(file) ? '' : fData(size || 0)}
                primaryTypographyProps={{ variant: 'subtitle2' }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />
              <ListItemSecondaryAction>
                <MIconButton edge="end" size="small" onClick={() => onRemove(file)}>
                  <Icon icon={'eva:close-fill'} />
                </MIconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </AnimatePresence>
    </List>
  );

  return (
    <Box sx={{ width: '100%', ...sx }}>
      {getFileListPreview(hasFile, files, showPreview)}

      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter'
          })
        }}
      >
        <input {...getInputProps()} />

        <UploadIllustration sx={{ width: 220 }} />

        <Box sx={{ p: 3, ml: { md: 2 } }}>
          <Typography gutterBottom variant="h5">
            Drop or Select file
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Drop files here or click&nbsp;
            <Typography
              variant="body2"
              component="span"
              sx={{ color: 'primary.main', textDecoration: 'underline' }}
            >
              browse
            </Typography>
            &nbsp;thorough your machine
          </Typography>
          <Typography
            variant="caption"
            sx={{
              mt: 1.5,
              mx: 'auto',
              display: 'block',
              color: 'text.secondary'
            }}
          >
            Allowed only *.jpeg, *.jpg, *.png, *.gif
          </Typography>
        </Box>
      </DropZoneStyle>

      {getFileListPreview(hasFile, fileToUpload, showPreview)}

      {hasFile && (
        <Stack direction="row" justifyContent="flex-end">
          <Button onClick={onRemoveAll} sx={{ mr: 1.5 }}>
            Remove all
          </Button>
          <Button variant="contained" onClick={save}>
            Upload files
          </Button>
        </Stack>
      )}
    </Box>
  );
}

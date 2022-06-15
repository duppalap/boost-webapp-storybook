// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { MenuItem, TextField, TextFieldProps } from '@mui/material';

// ----------------------------------------------------------------------

interface IProps {
  name: string;
  options: any;
}

export default function RHFSelect({ name, options, ...other }: IProps & TextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
        >
          {options?.map((option) => (
            <MenuItem
              key={option.key}
              value={option.value}
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 0.75,
                typography: 'body2',
                textTransform: 'capitalize'
              }}
            >
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}

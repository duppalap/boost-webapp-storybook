import { Icon } from '@iconify/react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { FieldInputProps } from 'formik';
import * as React from 'react';
import { useState } from 'react';
import { IFormField } from './';

export interface TextProps {
  item: IFormField;
  t: any;
  e: any;
  fieldProps: FieldInputProps<any>;
  fieldCallback: any;
}

export default function MFormText({ item, t, e, fieldProps, fieldCallback }: TextProps) {
  //past the rest of parameters in "item" to the TextField to avoild javscript errors
  const { name, handleChange, type, ...rest } = item;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = (show: boolean) => {
    setShowPassword(!show);
  };

  return (
    <TextField
      {...rest}
      key={name}
      fullWidth
      type={showPassword ? 'text' : type}
      {...fieldProps}
      inputProps={{
        'data-testid': name
      }}
      InputProps={{
        ...(item.type === 'password' && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => handleShowPassword(showPassword)} edge="end">
                <Icon icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
              </IconButton>
            </InputAdornment>
          )
        })
      }}
      error={Boolean(t && e)}
      helperText={t && e}
      onChange={(event) => {
        const { value } = event.target;
        fieldCallback(item, value);
        if (handleChange) handleChange(event);
      }}
    />
  );
}

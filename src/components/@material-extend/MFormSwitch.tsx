import { FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import { IFormField } from 'components/@material-extend';
import { get } from 'lodash';
import * as React from 'react';

export interface SwitchProps {
  item: IFormField;
  values: any;
  switchCallback: any;
}
export default function MFormSwitch({ item, values, switchCallback }: SwitchProps) {
  const { name, label, handleChange } = item;

  return (
    <Stack key={`${name}`} alignItems="flex-start">
      <FormControlLabel
        labelPlacement="start"
        control={
          <Switch
            onChange={(event) => {
              const { checked } = event.target;
              switchCallback(item, checked);
              handleChange(event);
            }}
            checked={Boolean(get(values, name) === true)}
          />
        }
        label={
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {label}
          </Typography>
        }
      />
    </Stack>
  );
}

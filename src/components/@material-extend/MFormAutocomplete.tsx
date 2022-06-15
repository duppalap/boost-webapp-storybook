import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { FieldInputProps } from 'formik';
import * as React from 'react';
import { ChangeEvent } from 'react';
import { IFormField, ISelectOption } from '.';

export interface AutocompleteProps {
  item: IFormField;
  t: any;
  e: any;
  fieldProps: FieldInputProps<any>;
  fieldCallback: any;
}
export default function MFormAutocomplete({
  item,
  t,
  e,
  fieldProps,
  fieldCallback
}: AutocompleteProps) {
  //past the rest of parameters in "item" to the TextField to avoild javscript errors
  const { name, handleChange, disabled, options, ...rest } = item;

  const [value, setValue] = React.useState<ISelectOption | null>(null);

  React.useEffect(() => {
    const defaultOption: ISelectOption | null =
      options?.find((element) => element.value == fieldProps.value) || null;
    setValue(defaultOption);
  }, [fieldProps.value]);

  return options ? (
    <Autocomplete
      id={name}
      value={value}
      key={`auto-complete-${name}`}
      options={options}
      disabled={disabled}
      autoHighlight
      autoComplete
      includeInputInList
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, e) => option.value === e.value}
      data-testid={name}
      renderInput={(params) => (
        <TextField {...params} {...rest} error={Boolean(t && e)} helperText={t && e} />
      )}
      onChange={(event: ChangeEvent<HTMLInputElement>, newValue: ISelectOption | null) => {
        setValue(newValue);
        fieldCallback(item, newValue);
        if (handleChange) handleChange(newValue);
      }}
    />
  ) : (
    <React.Fragment key={`react-fragment-${name}`} />
  );
}

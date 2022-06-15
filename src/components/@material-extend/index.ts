import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export { default as MAccordian } from "./MAccordian";
export { default as MAvatar } from "./MAvatar";
export { default as MBreadcrumbs } from "./MBreadcrumbs";
export { default as MDialog } from "./MDialog";
export { default as MHidden } from "./MHidden";
export * from "./buttons";

export interface ISelectOption {
  key?: string | number;
  value: string | number;
  label: string;
}
export interface IFormField {
  name: string;
  label?: string;
  type?: string;
  sx?: object;
  switch?: boolean;
  inputProps?: object;
  switchValueType?: string;
  disabled?: boolean;
  hidden?: boolean;
  required?: boolean;
  defaultValue?: string;
  handleChange?: any;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  options?: ISelectOption[];
  fields?: IFormField[];
}

export interface MFormProps {
  id: string;
  heading?: any;
  isEdit: boolean;
  fields?: IFormField[];
  additionalFields?: ReactJSXElement[];
  accordians?: IFormAccordian[];
  nonFormAccordians?: any[];
  initialValues: any;
  additionalValues?: object;
  additionalBody?: object;
  apiMethod?: "POST" | "PUT";
  apiUrl?: string;
  fullWidthButtons?: boolean;
  submitButtonName?: string;
  submitAction?: any;
  formTouched?: boolean;
  successMessage?: string;
  onSuccessAction?: any;
  model?: string;
  validationSchema?: any;
  successUrl?: string;
  enableCancel?: boolean;
  enableRemove?: boolean;
  cardLayout?: boolean;
  containerLayout?: boolean;
  links?: any;
  removeAction?: VoidFunction;
  cancelAction?: VoidFunction;
}

export interface IFormAccordian {
  title: string;
  info?: string;
  fields: IFormField[] | IFormTable[];
}

export interface IFormTable {
  type?: any;
  table: any;
}

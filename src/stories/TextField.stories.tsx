import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import {TextField} from '@mui/material';

export default {

    title: "Text/Form Text Field",
    componet: TextField,

} as ComponentMeta<typeof TextField>;

const BaseTextTemplate: ComponentStory<typeof TextField> = (args) => (
    <div><TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        <TextField id="filled-basic" label="Filled" variant="filled"/>
        <TextField id="standard-basic" label="Standard" variant="standard"/>
    </div>

);

export const BaseTextField = BaseTextTemplate.bind({});

BaseTextField.args = {}




const FormTextTemplate: ComponentStory<typeof TextField> = (args) => (
    <div>
        <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
        />
        <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
        />
        <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
        />

    </div>


);

export const FormTextField = FormTextTemplate.bind({});

FormTextField.args = {}

const VaildationTextTemplate: ComponentStory<typeof TextField> = (args) => (

    <div>
        <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
        />
        <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
        />
    </div>

);
 export const ValidationTextField = VaildationTextTemplate.bind({});

 ValidationTextField.args = {

}


const IconTextTemplate: ComponentStory<typeof TextField> = (args) => (

    <div>
        <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                ),
            }}
            variant="standard"
        />

        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                With a start adornment
            </InputLabel>
            <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                }
            />
        </FormControl>
    </div>

);


export const IconTextField = IconTextTemplate.bind({});


ValidationTextField.args = {

}

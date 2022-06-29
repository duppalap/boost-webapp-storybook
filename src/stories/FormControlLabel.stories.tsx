
import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {FormControlLabel, FormGroup, Checkbox} from '@mui/material';

export default {

    title: "Form/Form Control Label",
    componet: FormControlLabel,

} as ComponentMeta<typeof FormControlLabel>;


const BaseFormControlTemplate: ComponentStory<typeof FormControlLabel> = (args) => (
    <div>
        <FormGroup>
            <FormControlLabel {...args} control={<Checkbox defaultChecked/>} />
            <FormControlLabel disabled control={<Checkbox/>} label="Disabled"/>
        </FormGroup>
    </div>

);

export const Basic = BaseFormControlTemplate.bind({});

Basic.args = {
    label:"Enabled"
}



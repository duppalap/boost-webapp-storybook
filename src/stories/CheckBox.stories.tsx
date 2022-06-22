import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import { Checkbox } from '@mui/material';


export default {

    title: "Check Box",
    componet: Checkbox,

} as ComponentMeta<typeof Checkbox>;


const BaseCheckBoxTemplate: ComponentStory<typeof Checkbox> = (args) => (
    <div>
        <Checkbox {...args} defaultChecked />
        <Checkbox {...args}/>

    </div>

);

export const Basic = BaseCheckBoxTemplate.bind({});

Basic.args = {

}

const DisableCheckBoxTemplate: ComponentStory<typeof Checkbox> = (args) => (
    <div>

        <Checkbox {...args} disabled />
        <Checkbox {...args} disabled checked />
    </div>

);

export const DisableCheck = DisableCheckBoxTemplate.bind({});

DisableCheck.args = {



}



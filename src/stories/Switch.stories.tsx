import {ComponentMeta, ComponentStory} from "@storybook/react";

import React from "react";
import {Switch,FormGroup,FormControlLabel} from '@mui/material';


export default {

    title: "Switch",
    componet: Switch,

} as ComponentMeta<typeof Switch>;


const BaseSwitchTemplate: ComponentStory<typeof Switch> = (args) => (
    <div>
        <Switch {...args}>
            <Switch {...args} disabled defaultChecked />

        </Switch>
    </div>

);

export const Basic = BaseSwitchTemplate.bind({});

Basic.args =  {

}

const LabelSwitchTemplate : ComponentStory<typeof Switch> = (args) => (
    <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
);
export const LabelS = LabelSwitchTemplate.bind({});

LabelS.args = {

}

const SizeSwitchTemplate : ComponentStory<typeof Switch> = (args) => (
    <div>
        <Switch {...args} defaultChecked  />
        <Switch defaultChecked />
    </div>
);
export const SizeS = SizeSwitchTemplate.bind({});

SizeS.args = {
    defaultChecked: true,
    size:"small"

}

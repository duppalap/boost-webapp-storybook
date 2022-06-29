import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ToggleButton, ToggleButtonGroup} from '@mui/material';


export default {

    title: "Button/Toggle Button",
    componet: ToggleButton,

} as ComponentMeta<typeof ToggleButton>;


const BaseToggleButtonTemplate: ComponentStory<typeof ToggleButton> = (args) => (
    <div>
        < ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>


    </div>

);

export const Basic = BaseToggleButtonTemplate.bind({});

Basic.args = {}

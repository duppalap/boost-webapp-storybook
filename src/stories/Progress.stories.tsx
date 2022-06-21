import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {CircularProgress, LinearProgress} from '@mui/material';





export default {

    title: "Progress",
    componet: CircularProgress, LinearProgress,

} as ComponentMeta<typeof CircularProgress>;


const BaseCircularProgress: ComponentStory<typeof CircularProgress> = (args) => (
    <div><CircularProgress
        {...args}/>

    </div>

);

export const BasicC = BaseCircularProgress.bind({});

BasicC.args = {
    color: "inherit"
}
const BaseLinearProgress: ComponentStory<typeof LinearProgress> = (args) => (
    <div><LinearProgress
        {...args}/>

    </div>

);
export const BasicL = BaseLinearProgress.bind({});

BasicL.args = {
    color: "inherit"

}

export const LinearDeterminate = BaseLinearProgress.bind({});




LinearDeterminate.args = {
    variant: "determinate",
    // value with some animation function needs to be made. Adding one to this file leads to this stories disappearing
    // for some reason.

}


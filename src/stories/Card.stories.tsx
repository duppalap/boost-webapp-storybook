

import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import { Card, CardMedia, Typography, CardContent} from '@mui/material';

import flower from '../boostcharger.png';


export default {

    title: "Misc/Card",
    componet: CardMedia,

} as ComponentMeta<typeof Card>;


const BaseToggleButtonTemplate: ComponentStory<typeof CardMedia> = (args) => (
    <Card>
        <CardContent>

    </CardContent>
    <CardMedia  {...args}></CardMedia>
    </Card>

);

export const Basic = BaseToggleButtonTemplate.bind({});

Basic.args = {
    height:"500",
    image: flower,

    component:"svg",
    sx:{}



}
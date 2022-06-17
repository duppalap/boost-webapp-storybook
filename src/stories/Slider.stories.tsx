import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Slider } from '@mui/material';


export default {

    title:"Slider/Scroll Bar",
    component: Slider,

    argTypes: {
        marks: Array

    },
} as ComponentMeta<typeof Slider>;

const BasicSliderTemplate: ComponentStory<typeof Slider> = (args) => (
    <Slider {...args} />
);

export const Basic = BasicSliderTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    color: "secondary",
    label: "Primary",


};

const SmallSliderTemplate: ComponentStory<typeof Slider> = (args) => (
    <Slider {...args} />
);

export const Small = SmallSliderTemplate.bind({});

Small.args = {
    color: "secondary",
    size: "small",

}

const DiscreteSliderTemplate: ComponentStory<typeof Slider> = (args) => (
    <Slider {...args} />
);
export const Discrete = DiscreteSliderTemplate.bind({});

Discrete.args = {

    //TODO Marks is an array object since the compiler is
    // excepting an array but gets a string an error happens when using mark prop

   // marks: {min: "10", max: "110"},

}








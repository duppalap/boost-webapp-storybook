import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MText from "../components/MText"

export default {

    title: "Form Text Field",
    componet: MText,

} as ComponentMeta<typeof MText>;




const BaseTextTemplate: ComponentStory<typeof MText> = (args) => (
    <MText {...args} />

);

export const Basic = BaseTextTemplate.bind({});

Basic.args = {
    required: true,
    disable: false,
    type: "text",


}
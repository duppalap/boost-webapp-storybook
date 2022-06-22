import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import MText from "../components/MText"

export default {

    title: "Form Text Field",
    componet: MText,

} as ComponentMeta<typeof MText>;


const BaseTextTemplate: ComponentStory<typeof MText> = (args) => (
    <><MText {...args} /><MText> </MText></>

);

export const Basic = BaseTextTemplate.bind({});

Basic.args = {

    id: "basic text",
    type: "text",
    required: true


}
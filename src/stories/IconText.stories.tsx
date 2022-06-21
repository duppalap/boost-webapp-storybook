import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";


import MIconText from "../components/MIconText"


export default {

    title: "Icon Text",
    componet: MIconText

} as ComponentMeta<typeof MIconText>;

const BasicIconText: ComponentStory<typeof MIconText> = (args) => (
    <div><MIconText
        {...args}/>

    </div>

);

export const Basic = BasicIconText.bind({});

Basic.args = {


}


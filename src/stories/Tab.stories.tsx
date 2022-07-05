import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Tab} from '@mui/material';
import {TabPanel} from '@mui/lab';
import { Tabs } from '@mui/material';
import { TabContext } from '@mui/lab';


export default {

    title: "Misc/Basic Tab",
    componet: Tab,

} as ComponentMeta<typeof Tab>;


const BaseTabTemplate: ComponentStory<typeof Tab> = (args) => (
   // Not sure if I should add a "handleChange function" like the mui example.

    <div> <TabContext value={"SomeValue"}>
        <Tabs value={"Hello"}  aria-label="basic tabs example">
            <Tab label="hello"/>
            <Tab {...args} />
        </Tabs>
        <TabPanel value={"hello"} >
            Item One
        </TabPanel>
        <TabPanel value={"hello2"} >
            Item Two
        </TabPanel>
    </TabContext>


    </div>


);

export const Basic = BaseTabTemplate.bind(
{
}
);

Basic.args =
{
    label: "Label 1"

}

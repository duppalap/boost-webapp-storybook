
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import { ListItem } from '@mui/material';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import ListItemText from "@mui/material/ListItemText";


export default {

    title: "Misc/ListItemtext",
    componet: ListItemText,

} as ComponentMeta<typeof ListItemText>;


const BaseToggleButtonTemplate: ComponentStory<typeof ListItemText> = (args) => (
    <ListItem>
        <ListItemButton>
            <ListItemIcon>  </ListItemIcon>
            <ListItemText {...args} />
        </ListItemButton>
    </ListItem>

);

export const Basic = BaseToggleButtonTemplate.bind({});

Basic.args = {
primary: "Text",
    sx: {

        color: "rgba(247, 247, 247)"


    }
}
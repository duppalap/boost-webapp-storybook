
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, { useState, useEffect  } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MBaseButton, MIconButton, MFloatingButton } from "../components";

import List from '@mui/material/List';
import { SwipeableDrawer } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PublicIcon from '@mui/icons-material/Public';










export default {

    title: "Text/Drawer",
    componet: SwipeableDrawer,

} as ComponentMeta<typeof SwipeableDrawer>;



const LeftNavTemplate: ComponentStory<typeof SwipeableDrawer> = (args) => (

    <SwipeableDrawer {...args}

                     variant="permanent"
                     anchor="left"

    >


    </SwipeableDrawer>


);

export const LeftNav = LeftNavTemplate.bind({});

LeftNav.args = {
    label:"Enabled",
    PaperProps:{
        sx: {
            width: 350,
            height:1080,
            fontWeight: 'light',
            fontSize:2,
            flexShrink: 0,
            color: "rgba(247, 247, 247)",
            boxSizing: 'border-box',
            backgroundColor: "rgba(49, 54, 51)",
            typography: 'body1',

        }},
}

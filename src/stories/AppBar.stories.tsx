import {AppBar,Box,IconButton,Button,Typography, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react"


export default {

    title: "Misc/AppBar",
    componet: AppBar,

} as ComponentMeta<typeof AppBar>;


const AppBarTemplate: ComponentStory<typeof AppBar> = (args) => (

    <Box sx={{ flexGrow: 1 }}>
        <AppBar {...args}>
            <Toolbar>
            </Toolbar>
        </AppBar>
    </Box>
);

export const Basic = AppBarTemplate.bind({});

Basic.args = {

    position:'absolute',
    sx:{
        background: 'transparent',
        htmlColor:"blue",
    },


}
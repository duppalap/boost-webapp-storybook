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
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>


            </Toolbar>
        </AppBar>
    </Box>
);

export const Basic = AppBarTemplate.bind({});

Basic.args = {
color: "primary",

    position:'absolute',
    sx:{},


}
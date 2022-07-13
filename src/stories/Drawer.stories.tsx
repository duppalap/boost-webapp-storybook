
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

import ThermostatIcon from '@mui/icons-material/Thermostat';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail'









export default {

    title: "Text/Drawer",
    componet: SwipeableDrawer,

} as ComponentMeta<typeof SwipeableDrawer>;



const LeftNavTemplate: ComponentStory<typeof SwipeableDrawer> = (args) => (

    <SwipeableDrawer {...args}

                     variant="permanent"
                     anchor="left"

    >

        <List> <Box  sx={{ textTransform: 'capitalize', fontWeight: 'bold', textAlign: 'center', color:'rgba(120, 245, 151)' }}>
            <Typography variant={'h4'}> Freewire </Typography>
        </Box>
            <ListItem>
            <ListItemButton>
                <ListItemIcon> <AccountCircleIcon htmlColor={"White"}  fontSize={"large"}/> </ListItemIcon>
                <ListItemText primary={"Account name"} />
                    </ListItemButton>
            </ListItem>



            {['GENERAL', 'ADMINISTRATION', 'NETWORK MANAGEMENT',].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index === 0 ? <SpeedIcon /> : index === 1 ? <SupervisorAccountIcon /> : <PublicIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

        <List style={{ marginTop: `auto`, }} >
            <ListItem sx={{textAlign: 'center'}}>
                <ListItemText> Need help? </ListItemText>
            </ListItem>
            <ListItem sx={{textAlign: 'center'}}>
                <ListItemText> Have anymore questions? </ListItemText>
            </ListItem>
            <ListItem sx={{textAlign: 'center'}}>
                <ListItemButton sx={{textAlign: 'center', color:'rgba(120, 245, 151)'}}>
            <ListItemText>Contact</ListItemText>
                </ListItemButton>
            </ListItem>

        </List>

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

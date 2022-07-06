
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, { useState, useEffect  } from "react";

import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail'



import Collapse from '@mui/material/Collapse';


const open = true;





export default {

    title: "Text/Drawer",
    componet: Drawer,

} as ComponentMeta<typeof Drawer>;


const LeftDrawerTemplate: ComponentStory<typeof Drawer> = (args) => (
        <Drawer {...args}

            variant="permanent"
            anchor="left"

        >


            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>


);

export const Basic = LeftDrawerTemplate.bind({});

Basic.args = {
    label:"Enabled",
    PaperProps:{
    sx: {
        width: 240,
        flexShrink: 0,
        color: 'text.secondary',
        boxSizing: 'border-box',
        backgroundColor: "#fcba03",

    }},




}
const handleClick = () => {

    const [open, setOpen] = useState(false);
    setOpen((prev) => !prev);
};

const ListTemplate: ComponentStory<typeof Drawer> = (args) => (


            <Drawer {...args}

                variant="permanent"
                anchor="left"
            >
            <ListItem >
                <ListItemButton >
                    <ListItemIcon>
                       <InboxIcon />
                    </ListItemIcon>
                    <ListItemText  />
                </ListItemButton>

            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Collapse>
            </Drawer>



);

export const DList = ListTemplate.bind({});

DList.args = {
}

const LeftNavTemplate: ComponentStory<typeof Drawer> = (args) => (
    <Drawer {...args}

            variant="permanent"
            anchor="left"

    >

        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>

                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

    </Drawer>


);

export const LeftNav = LeftDrawerTemplate.bind({});

LeftNav.args = {
    label:"Enabled",
    PaperProps:{
        sx: {
            width: 240,
            height:400,
            flexShrink: 0,
            color: "rgba(88, 219, 83)",
            boxSizing: 'border-box',
            backgroundColor: "rgba(49, 54, 51)",

        }},
}

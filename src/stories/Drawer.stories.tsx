
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, { useState, useEffect  } from "react";
import {Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail'
import ListSubheader from '@mui/material/ListSubheader';

import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
const open = true;



export default {

    title: "Text/Drawer",
    componet: Drawer,

} as ComponentMeta<typeof Drawer>;


const LeftDrawerTemplate: ComponentStory<typeof Drawer> = (args) => (
        <Drawer

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
    label:"Enabled"
}
const handleClick = () => {

    const [open, setOpen] = useState(false);
    setOpen((prev) => !prev);
};

const ListTemplate: ComponentStory<typeof Drawer> = (args) => (


            <Drawer

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

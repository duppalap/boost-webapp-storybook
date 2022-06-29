import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Badge} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export default {

    title: "Misc/Badge",
    componet: Badge,

} as ComponentMeta<typeof Badge>;


const BaseBadgeTemplate: ComponentStory<typeof Badge> = (args) => (
    <div>
        <Badge badgeContent={4} color="secondary">
            <MailIcon color="action"/>
        </Badge>
        <Badge badgeContent={4} color="success">
            <MailIcon color="action"/>
        </Badge>
    </div>

);

export const Basic = BaseBadgeTemplate.bind({});

Basic.args = {}

const DotBadgeTemplate: ComponentStory<typeof Badge> = (args) => (
    <div>
        <Badge color="secondary" variant="dot">
            <MailIcon/>
        </Badge>
    </div>

);

export const DotBadge = DotBadgeTemplate.bind({});

DotBadge.args = {}


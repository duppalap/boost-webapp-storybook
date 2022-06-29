import {ComponentMeta, ComponentStory} from "@storybook/react";

import React from "react";
import {BottomNavigation,BottomNavigationAction} from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default {
    title: "Button/Bottom Nav",
    component: BottomNavigation,


} as ComponentMeta<typeof BottomNavigation>;


const BaseAlertTemplate: ComponentStory<typeof BottomNavigation> = (args) => (
    <BottomNavigation
        showLabels
        value={"someValue"}
        onChange={(event, newValue) => {
            //setValue(newValue);
        }}
    >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
);

export const Basic = BaseAlertTemplate.bind({});

Basic.args = {};



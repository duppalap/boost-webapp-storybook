import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import SvgIcon from '@mui/material/SvgIcon';
import {fontFamily} from "react-styleguidist/lib/client/styles/theme";

export default {

    title: "Misc/Icons",
    componet: SvgIcon,

} as ComponentMeta<typeof SvgIcon>;


const AccountCircleTemplate: ComponentStory<typeof SvgIcon> = (args) => (
   <AccountCircleIcon {...args}/>



);

export const AccountCircle = AccountCircleTemplate.bind({});

AccountCircle.args = {
    color:"inherit",
    fontSize:'medium',
    inheritViewBox: false,

    htmlColor: "Blue",
    size:'large',
    width: 60,
    height: 60,

}
const ThermostatIconTemplate: ComponentStory<typeof SvgIcon> = (args ) => (

    <ThermostatIcon {...args}/>
);

export const ThermoIcon = ThermostatIconTemplate.bind({});


ThermoIcon.args = {
    color:"inherit",

    inheritViewBox: false,

    htmlColor: "Black",

    style: {fontSize: 60},


}

const LocalFireDepartmentIconTemplate: ComponentStory<typeof SvgIcon> = (args) => (
    <LocalFireDepartmentIcon {...args} />

);
export const LocalFireIcon = LocalFireDepartmentIconTemplate.bind({});

LocalFireIcon.args = {
    color:"inherit",

    inheritViewBox: false,

    htmlColor: "Black",

    style: {fontSize: 60},

}

const AcUnitTemplate: ComponentStory<typeof SvgIcon> = (args) => (
    <AcUnitIcon {...args}/>



);

export const AcUnit = AcUnitTemplate.bind({});

AcUnit.args = {
    color:"inherit",

    inheritViewBox: false,

    htmlColor: "Black",

    style: {fontSize: 60},

}

const HomeIconTemplate: ComponentStory<typeof SvgIcon> = (args) => (
    <HomeIcon {...args}/>



);

export const Homeicon = HomeIconTemplate.bind({});

Homeicon.args = {
    color:"inherit",

    inheritViewBox: false,

    htmlColor: "Black",

    style: {fontSize: 60},


}
const SpeedyIconTemplate: ComponentStory<typeof SvgIcon> = (args) => (
    <SpeedIcon {...args}/>



);

export const Speedyicon = SpeedyIconTemplate.bind({});

Speedyicon.args = {
    color:"inherit",

    inheritViewBox: false,

    htmlColor: "Black",

    style: {fontSize: 60},


}




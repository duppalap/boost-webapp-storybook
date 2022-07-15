import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import SvgIcon from '@mui/material/SvgIcon';

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
    fontSize:'medium',
    inheritViewBox: false,
    viewBox: "0 0 0 24 24",
    htmlColor: "Blue",

}

const LocalFireDepartmentIconTemplate: ComponentStory<typeof SvgIcon> = (args) => (
    <LocalFireDepartmentIcon {...args} />

);
export const LocalFireIcon = LocalFireDepartmentIconTemplate.bind({});

LocalFireIcon.args = {
    color:"inherit",
    fontSize:'medium',
    inheritViewBox: false,

    htmlColor: "Red",

}

const AcUnitTemplate: ComponentStory<typeof SvgIcon> = (args) => (
    <AcUnitIcon {...args}/>



);

export const AcUnit = AcUnitTemplate.bind({});

AcUnit.args = {
    color:"inherit",
    fontSize:'medium',
    inheritViewBox: false,

    htmlColor: "Blue",

}

const HomeIconTemplate: ComponentStory<typeof SvgIcon> = (args) => (
    <HomeIcon {...args}/>



);

export const Homeicon = HomeIconTemplate.bind({});

Homeicon.args = {
    color:"inherit",
    fontSize:'medium',
    inheritViewBox: false,
    viewBox: "0 0 0 24 24",
    htmlColor: "Black",

}


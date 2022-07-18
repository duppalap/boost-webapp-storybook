import {ComponentMeta, ComponentStory} from "@storybook/react";

import React from "react";
import { Paper, Box } from '@mui/material';


export default {

    title: "Misc/Paper",
    componet: Paper,

} as ComponentMeta<typeof Box>;


const BaseSwitchTemplate: ComponentStory<typeof Paper> = (args) => (

    <Box {...args}

    >
        <Paper elevation={3} />


    </Box>


);

export const PaperBasic = BaseSwitchTemplate.bind({});

PaperBasic.args =  {

    sx:{
    display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
        m: 1,
            width: 128,
            height: 128,
    },
},




}



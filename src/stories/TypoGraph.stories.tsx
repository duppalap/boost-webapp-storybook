import {Box, Typography} from '@mui/material';

import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";


export default {

    title: "Misc/Text",
    componet: Box,

} as ComponentMeta<typeof Box>;


const BaseToggleButtonTemplate: ComponentStory<typeof Box> = (args) => (
    <Box {...args}>
        <Typography > Sign In  </Typography>
    </Box>

);

export const Basic = BaseToggleButtonTemplate.bind({});

Basic.args = {

        sx: {


        }
}
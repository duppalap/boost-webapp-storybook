import {ComponentMeta, ComponentStory} from "@storybook/react";

import React from "react";
import {Alert, Button} from '@mui/material';

export default {
    title: "Misc/Alerts",
    component: Alert,


} as ComponentMeta<typeof Alert>;


const BaseAlertTemplate: ComponentStory<typeof Alert> = (args) => (
    <Alert {...args} >
        This is a success alert — check it out!

    </Alert>
);

export const Basic = BaseAlertTemplate.bind({});

Basic.args = {};

const UndoAlertTemplate: ComponentStory<typeof Alert> = (args) => (
    <div><Alert onClose={() => {
    }}>This is a success alert — check it out!</Alert>
        <Alert
            action={
                <Button color="inherit" size="small">
                    UNDO
                </Button>
            }
        >
            This is a success alert — check it out!
        </Alert>
    </div>
);
export const UndoAlert = UndoAlertTemplate.bind({});

UndoAlert.args = {}


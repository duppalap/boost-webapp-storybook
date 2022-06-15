import { ComponentMeta, ComponentStory } from "@storybook/react";
import AlarmIcon from "@mui/icons-material/Alarm";
import React from "react";
import { MBaseButton, MIconButton, MFloatingButton } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Material UI/Button",
  component: MBaseButton,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MBaseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BaseButtonTemplate: ComponentStory<typeof MBaseButton> = (args) => (
  <MBaseButton {...args} />
);

export const Basic = BaseButtonTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  color: "primary",
  label: "Primary",
  variant: "contained",
};

const IconButtonTemplate: ComponentStory<typeof MIconButton> = (args) => (
  <MIconButton {...args}>
    <AlarmIcon />
  </MIconButton>
);

export const Icon = IconButtonTemplate.bind({});
Icon.args = {
  color: "primary",
};

const FloatingButtonTemplate: ComponentStory<typeof MFloatingButton> = (
  args
) => (
  <MFloatingButton {...args}>
    <AlarmIcon />
    Medium
  </MFloatingButton>
);

export const Floating = FloatingButtonTemplate.bind({});
Floating.args = {
  color: "primary",
  variant: "extended",
  size: "medium",
};

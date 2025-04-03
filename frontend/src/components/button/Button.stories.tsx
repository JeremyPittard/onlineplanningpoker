import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};
export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    text: "Primary Button",
  },
};

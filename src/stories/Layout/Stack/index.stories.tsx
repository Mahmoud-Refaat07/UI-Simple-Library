import Box from "../Box/index";
import Stack from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: { control: "select", options: ["row", "column"] },
    align: { control: "select", options: ["start", "center", "end"] },
    justify: {
      control: "select",
      options: ["start", "center", "between", "around"],
    },
    gap: { control: ["2", "4", "6", "8", "10"] },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    direction: "column",
    gap: "4",
  },
  render: (args) => {
    return (
      <Stack {...args} className="flex w-150 h-100 p-2 bg-gray-400">
        <Box className="w-25 h-25 bg-red-500"></Box>
        <Box className="w-25 h-25 bg-blue-500"></Box>
        <Box className="w-25 h-25 bg-yellow-500"></Box>
        <Box className="w-25 h-25 bg-green-500"></Box>
      </Stack>
    );
  },
};

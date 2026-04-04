import Box from "../Box/index";
import Stack from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Stack {...args} className="gap-4 p-4 bg-gray-400">
        <Box className="w-25 h-25 bg-red-500"></Box>
        <Box className="w-25 h-25 bg-blue-500"></Box>
        <Box className="w-25 h-25 bg-yellow-500"></Box>
        <Box className="w-25 h-25 bg-green-500"></Box>
      </Stack>
    );
  },
};

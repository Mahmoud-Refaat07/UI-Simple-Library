import Box, { type BoxProps } from "../Box/index";
import { cn } from "../../../utils/index";
type StackProps = BoxProps;

const Stack = ({ className, ...props }: StackProps) => {
  return (
    <Box className={cn("flex flex-col items-center", className)} {...props} />
  );
};

export default Stack;

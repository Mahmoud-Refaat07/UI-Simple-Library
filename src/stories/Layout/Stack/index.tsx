import Box, { type BoxProps } from "../Box/index";
import { cn } from "../../../utils/index";

type StackProps = BoxProps & {
  direction?: "row" | "column";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "between" | "around";
  gap?: "2" | "4" | "6" | "8" | "10";
};

const directionClasses = {
  row: "flex-row",
  column: "flex-col",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
};

const gapClasses = {
  2: "gap-2",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
};

const Stack = ({
  direction = "column",
  align,
  justify,
  gap = "4",
  className,
  ...props
}: StackProps) => {
  return (
    <Box
      className={cn(
        "flex",
        directionClasses[direction],
        align && alignClasses[align],
        justify && justifyClasses[justify],
        gap && gapClasses[gap],
        className,
      )}
      {...props}
    />
  );
};

export default Stack;

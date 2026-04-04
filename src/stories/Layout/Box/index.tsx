import { forwardRef, type ComponentPropsWithoutRef } from "react";

export type BoxProps = ComponentPropsWithoutRef<"div">;

const Box = forwardRef<HTMLDivElement, BoxProps>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});

export default Box;

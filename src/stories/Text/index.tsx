// import { forwardRef } from "react";
// import { cn } from "../../utils";
// import { cva, type VariantProps } from "class-variance-authority";
// import type {
//   PolymorphicComponentPropsWithRef,
//   PolymorphicRef,
// } from "../../utils/Types";

// const textStyles = cva("w-full", {
//   variants: {
//     emphasis: {
//       low: "text-gray-600 font-light",
//     },
//     size: {
//       sm: "text-sm",
//       base: "text-base",
//       lg: "text-lg",
//       xl: "text-xl",
//       "2xl": "text-2xl",
//       "3xl": "text-3xl",
//     },
//     weight: {
//       thin: "font-thin",
//       normal: "font-normal",
//       medium: "font-medium",
//       semibold: "font-semibold",
//       bold: "font-bold",
//       black: "font-black",
//     },
//     align: {
//       left: "text-left",
//       center: "text-center",
//       right: "text-right",
//     },
//     italic: {
//       true: "italic",
//     },
//     underline: {
//       true: "underline underline-offset-2",
//     },
//   },
//   defaultVariants: {
//     size: "base",
//     align: "left",
//   },
// });

// type TextOwnProps = VariantProps<typeof textStyles>;

// type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
//   C,
//   TextOwnProps
// >;

// type TextComponent = <C extends React.ElementType = "span">(
//   props: TextProps<C>,
// ) => React.ReactElement | null;

// const Text = forwardRef(
//   <C extends React.ElementType = "span">(
//     props: TextProps<C>,
//     ref: PolymorphicRef<C>,
//   ) => {
//     const { as, className, ...rest } = props;
//     const Component = as || "span";

//     return (
//       <Component
//         ref={ref}
//         className={cn(textStyles(rest), className)}
//         {...rest}
//       />
//     );
//   },
// );

// export default Text as TextComponent;

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef((props, ref) => {
  const { className, variant, size, children, ...rest } = props;
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn(className)}
      {...rest}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  );
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

export { ToggleGroup, ToggleGroupContext };

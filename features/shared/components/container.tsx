import type { ComponentPropsWithoutRef } from "react";

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ContainerProps = ComponentPropsWithoutRef<"div">;

/** Full-width wrapper — use for page shells, navbar bar, backgrounds. */
export function ContainerFluid({ className, ...props }: ContainerProps) {
  return <div className={joinClasses("container-fluid", className)} {...props} />;
}

/** Full-width content with 24px horizontal padding. */
export function Container({ className, ...props }: ContainerProps) {
  return <div className={joinClasses("container", className)} {...props} />;
}

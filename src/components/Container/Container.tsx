import { type HTMLAttributes } from "react";
import styles from "./Container.module.css";

type ContainerProps =  HTMLAttributes<HTMLDivElement>

export function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={className ? `${styles.container} ${className}` : styles.container}
      {...props}
    >
      {children}
    </div>
  );
}

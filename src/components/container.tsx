import React from "react";
import { cn } from "../lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  customClass?: string;
};

const Container = ({ children, customClass }: ContainerProps) => {
  return (
    <section
      className={cn("mx-auto max-w-3xl px-5 mt-10", customClass && customClass)}
    >
      {children}
    </section>
  );
};

export default Container;

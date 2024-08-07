"use client";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showLights?: boolean;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className,
  children,
  showLights = true,
  ...props
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center",
          className
        )}
        {...props}
      >
        {showLights && (
          <>
            <div className="aurora-light aurora-light-1"></div>
            <div className="aurora-light aurora-light-2"></div>
            <div className="aurora-light aurora-light-3"></div>
          </>
        )}
        <div className="absolute inset-0">
          <div className="jumbo absolute inset-0 opacity-50"></div>
        </div>
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-black">
          {children}
        </div>
      </div>
    </div>
  );
};
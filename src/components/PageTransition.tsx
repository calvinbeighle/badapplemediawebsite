
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: ReactNode;
  stage: "fadeIn" | "fadeOut";
  onAnimationEnd: () => void;
  location: string;
}

const PageTransition = ({
  children,
  stage,
  onAnimationEnd,
  location,
}: PageTransitionProps) => {
  return (
    <div
      className={cn(
        "w-full transition-opacity duration-450 ease-in-out",
        stage === "fadeIn" ? "opacity-100" : "opacity-0"
      )}
      onAnimationEnd={onAnimationEnd}
      key={location}
    >
      {children}
    </div>
  );
};

export default PageTransition;


import { cn } from "@/lib/utils";
import React from "react";

interface StudioCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
  icon?: React.ReactNode;
}

const StudioCard = ({
  title,
  description,
  imageSrc,
  className,
  icon,
}: StudioCardProps) => {
  return (
    <div
      className={cn(
        "group bg-white rounded-lg overflow-hidden shadow-sm border border-studio-100 transition-all duration-350 hover:shadow-md",
        className
      )}
    >
      {imageSrc && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-450 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="mb-3 text-studio-700">{icon}</div>}
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-studio-600">{description}</p>
      </div>
    </div>
  );
};

export default StudioCard;

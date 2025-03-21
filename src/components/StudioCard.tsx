import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={cn(
        "group bg-white rounded-lg overflow-hidden shadow-sm border border-studio-100 transition-all duration-350 hover:shadow-md",
        className
      )}
    >
      {imageSrc && (
        <div className="relative h-48 w-full overflow-hidden">
          {!imageLoaded && !imageError && (
            <Skeleton className="h-full w-full absolute inset-0" />
          )}
          <img
            src={imageSrc}
            alt={title}
            className={cn(
              "object-cover w-full h-full transition-all duration-500",
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
              "group-hover:scale-105"
            )}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            decoding="async"
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

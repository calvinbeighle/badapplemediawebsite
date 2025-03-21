
import { cn } from "@/lib/utils";
import Button from "./Button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features?: string[];
  imageSrc?: string;
  className?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost";
  icon?: React.ReactNode;
}

const ServiceCard = ({
  title,
  price,
  description,
  features = [],
  imageSrc,
  className,
  buttonText = "Learn More",
  buttonVariant = "outline",
  icon,
}: ServiceCardProps) => {
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
        "bg-white rounded-lg overflow-hidden shadow-sm border border-studio-100 transition-all duration-350 hover:shadow-md hover:border-purple-100",
        className
      )}
    >
      {imageSrc && (
        <div className="relative h-64 w-full overflow-hidden">
          {!imageLoaded && !imageError && (
            <Skeleton className="h-full w-full absolute inset-0" />
          )}
          <img
            src={imageSrc}
            alt={title}
            className={cn(
              "object-cover w-full h-full transition-all duration-500",
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
              "hover:scale-105"
            )}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-2">
          {icon && <span className="mr-2 text-purple-300">{icon}</span>}
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <div className="mb-3">
          <span className="text-2xl font-bold">{price}</span>
        </div>
        <p className="text-studio-600 mb-4">{description}</p>
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <span className="text-purple-300 mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Button to="/booking" variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;


import { Check } from "lucide-react";
import Button from "./Button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  className?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  className,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-350 hover:shadow-md border relative",
        popular
          ? "border-[#FCE4EC] scale-105 z-10 shadow-md"
          : "border-studio-100",
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-[#FCE4EC] text-black text-xs font-medium py-1 px-3 rounded-bl-md">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-studio-500 ml-1">/hour</span>
        </div>
        <p className="text-studio-600 mb-6">{description}</p>
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check
                size={16}
                className="mr-2 mt-1 text-studio-800 flex-shrink-0"
              />
              <span className="text-sm text-studio-700">{feature}</span>
            </div>
          ))}
        </div>
        <Button
          to="/booking"
          variant={popular ? "primary" : "outline"}
          className={cn(
            "w-full",
            popular ? "" : "hover:border-[#FCE4EC] hover:text-[#FCE4EC]"
          )}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;

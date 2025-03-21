
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

interface Feature {
  name: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

interface ComparisonTableProps {
  features: Feature[];
}

const ComparisonTable = ({ features }: ComparisonTableProps) => {
  return (
    <div className="w-full overflow-auto">
      <Table className="border-collapse">
        <TableHeader>
          <TableRow className="bg-studio-50">
            <TableHead className="w-[250px]">Feature</TableHead>
            <TableHead className="text-center">Basic</TableHead>
            <TableHead className="text-center">Standard</TableHead>
            <TableHead className="text-center">Premium</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, i) => (
            <TableRow key={i} className={i % 2 === 0 ? "bg-white" : "bg-studio-50/50"}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell className="text-center">
                {feature.basic ? 
                  <CheckCircle2 className="inline text-green-500" size={20} /> : 
                  <XCircle className="inline text-studio-300" size={20} />
                }
              </TableCell>
              <TableCell className="text-center">
                {feature.standard ? 
                  <CheckCircle2 className="inline text-green-500" size={20} /> : 
                  <XCircle className="inline text-studio-300" size={20} />
                }
              </TableCell>
              <TableCell className="text-center">
                {feature.premium ? 
                  <CheckCircle2 className="inline text-green-500" size={20} /> : 
                  <XCircle className="inline text-studio-300" size={20} />
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;

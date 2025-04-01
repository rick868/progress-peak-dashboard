
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

// Mock data
const personalRecords = [
  {
    id: 1,
    exercise: "Bench Press",
    weight: 225,
    reps: 5,
    date: "2023-11-18",
    isRecent: true,
  },
  {
    id: 2,
    exercise: "Squat",
    weight: 315,
    reps: 3,
    date: "2023-11-15",
    isRecent: true,
  },
  {
    id: 3,
    exercise: "Deadlift",
    weight: 405,
    reps: 1,
    date: "2023-11-10",
    isRecent: false,
  },
  {
    id: 4,
    exercise: "Pull-up",
    weight: 50,
    reps: 8,
    date: "2023-11-12",
    isRecent: false,
  },
  {
    id: 5,
    exercise: "Overhead Press",
    weight: 135,
    reps: 6,
    date: "2023-11-20",
    isRecent: true,
  },
];

interface PRTableProps {
  title?: string;
  data?: typeof personalRecords;
  limitRows?: number;
}

const PRTable: React.FC<PRTableProps> = ({ 
  title = "Personal Records", 
  data = personalRecords,
  limitRows
}) => {
  const displayData = limitRows ? data.slice(0, limitRows) : data;
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Exercise</TableHead>
              <TableHead className="text-right">Weight</TableHead>
              <TableHead className="text-right">Reps</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  {record.exercise}
                  {record.isRecent && (
                    <Badge className="bg-fitness-success text-white text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" /> New
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">{record.weight} lbs</TableCell>
                <TableCell className="text-right">{record.reps}</TableCell>
                <TableCell className="text-right">{formatDate(record.date)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PRTable;

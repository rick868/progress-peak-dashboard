
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, TooltipProps } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const weightData = [
  { date: "Week 1", value: 135 },
  { date: "Week 2", value: 145 },
  { date: "Week 3", value: 155 },
  { date: "Week 4", value: 160 },
  { date: "Week 5", value: 165 },
  { date: "Week 6", value: 175 },
  { date: "Week 7", value: 180 },
  { date: "Week 8", value: 185 },
];

const volumeData = [
  { date: "Week 1", value: 3000 },
  { date: "Week 2", value: 3200 },
  { date: "Week 3", value: 3400 },
  { date: "Week 4", value: 3500 },
  { date: "Week 5", value: 3700 },
  { date: "Week 6", value: 4000 },
  { date: "Week 7", value: 4100 },
  { date: "Week 8", value: 4300 },
];

const repsData = [
  { date: "Week 1", value: 6 },
  { date: "Week 2", value: 7 },
  { date: "Week 3", value: 8 },
  { date: "Week 4", value: 8 },
  { date: "Week 5", value: 9 },
  { date: "Week 6", value: 10 },
  { date: "Week 7", value: 10 },
  { date: "Week 8", value: 12 },
];

interface DataPoint {
  date: string;
  value: number;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded shadow-sm">
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-fitness-primary font-medium">{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

interface ProgressChartProps {
  exercise?: string;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ exercise = "Bench Press" }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{exercise} Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weight">
          <TabsList className="mb-4">
            <TabsTrigger value="weight">Weight</TabsTrigger>
            <TabsTrigger value="volume">Volume</TabsTrigger>
            <TabsTrigger value="reps">Reps</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weight" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fill: '#6B7280' }} />
                <YAxis tick={{ fill: '#6B7280' }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0EA5E9"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#0EA5E9" }}
                  activeDot={{ r: 6, fill: "#0EA5E9" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="volume" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={volumeData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fill: '#6B7280' }} />
                <YAxis tick={{ fill: '#6B7280' }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0EA5E9"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#0EA5E9" }}
                  activeDot={{ r: 6, fill: "#0EA5E9" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="reps" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={repsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fill: '#6B7280' }} />
                <YAxis tick={{ fill: '#6B7280' }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0EA5E9"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#0EA5E9" }}
                  activeDot={{ r: 6, fill: "#0EA5E9" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;

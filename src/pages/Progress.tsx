
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import ProgressChart from "@/components/Progress/ProgressChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock list of exercises
const exerciseOptions = [
  { value: "bench-press", label: "Bench Press" },
  { value: "squat", label: "Squat" },
  { value: "deadlift", label: "Deadlift" },
  { value: "overhead-press", label: "Overhead Press" },
  { value: "pull-up", label: "Pull-up" },
];

const Progress = () => {
  const [selectedExercise, setSelectedExercise] = React.useState("bench-press");
  
  // Function to get display name for the exercise
  const getExerciseLabel = (value: string) => {
    const exercise = exerciseOptions.find(ex => ex.value === value);
    return exercise ? exercise.label : value;
  };

  return (
    <DashboardLayout>
      <PageHeader 
        title="Progress Tracking" 
        description="Visualize your fitness progress over time and identify areas for improvement."
      />
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Exercise Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Select value={selectedExercise} onValueChange={setSelectedExercise}>
              <SelectTrigger className="w-full md:w-[250px]">
                <SelectValue placeholder="Select exercise" />
              </SelectTrigger>
              <SelectContent>
                {exerciseOptions.map((exercise) => (
                  <SelectItem key={exercise.value} value={exercise.value}>
                    {exercise.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <ProgressChart exercise={getExerciseLabel(selectedExercise)} />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Body Composition</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="weight">
            <TabsList className="mb-6">
              <TabsTrigger value="weight">Weight</TabsTrigger>
              <TabsTrigger value="bodyfat">Body Fat %</TabsTrigger>
              <TabsTrigger value="measurements">Measurements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weight">
              <div className="text-center py-8 text-gray-500">
                <p>Body weight tracking will be available soon.</p>
                <p className="mt-2 text-sm">Connect your data source to track changes in your weight over time.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="bodyfat">
              <div className="text-center py-8 text-gray-500">
                <p>Body fat percentage tracking will be available soon.</p>
                <p className="mt-2 text-sm">Connect your data source to monitor changes in your body composition.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="measurements">
              <div className="text-center py-8 text-gray-500">
                <p>Body measurements tracking will be available soon.</p>
                <p className="mt-2 text-sm">Connect your data source to track changes in key body measurements.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Progress;


import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import PRTable from "@/components/PersonalRecords/PRTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for different PR categories
const strengthPRs = [
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
    exercise: "Overhead Press",
    weight: 135,
    reps: 6,
    date: "2023-11-20",
    isRecent: true,
  },
  {
    id: 5,
    exercise: "Barbell Row",
    weight: 185,
    reps: 8,
    date: "2023-11-05",
    isRecent: false,
  },
];

const bodyweightPRs = [
  {
    id: 1,
    exercise: "Pull-up",
    weight: 50,
    reps: 8,
    date: "2023-11-12",
    isRecent: false,
  },
  {
    id: 2,
    exercise: "Push-up",
    weight: 0,
    reps: 45,
    date: "2023-11-14",
    isRecent: false,
  },
  {
    id: 3,
    exercise: "Dips",
    weight: 45,
    reps: 10,
    date: "2023-11-19",
    isRecent: true,
  },
  {
    id: 4,
    exercise: "Chin-up",
    weight: 35,
    reps: 10,
    date: "2023-11-08",
    isRecent: false,
  },
];

const cardioPRs = [
  {
    id: 1,
    exercise: "1 Mile Run",
    weight: 0,
    reps: 1,
    date: "2023-11-13",
    isRecent: false,
    notes: "6:45 min",
  },
  {
    id: 2,
    exercise: "5k Run",
    weight: 0,
    reps: 1,
    date: "2023-11-21",
    isRecent: true,
    notes: "24:30 min",
  },
  {
    id: 3,
    exercise: "10k Bike",
    weight: 0,
    reps: 1,
    date: "2023-11-17",
    isRecent: false,
    notes: "18:15 min",
  },
  {
    id: 4,
    exercise: "2000m Row",
    weight: 0,
    reps: 1,
    date: "2023-11-09",
    isRecent: false,
    notes: "7:50 min",
  },
];

const PersonalRecords = () => {
  return (
    <DashboardLayout>
      <PageHeader 
        title="Personal Records" 
        description="Track and celebrate your personal bests across different exercises and categories."
      />
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">PR Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="strength">
            <TabsList className="mb-6">
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="bodyweight">Bodyweight</TabsTrigger>
              <TabsTrigger value="cardio">Cardio</TabsTrigger>
            </TabsList>
            
            <TabsContent value="strength">
              <PRTable title="Strength Personal Records" data={strengthPRs} />
            </TabsContent>
            
            <TabsContent value="bodyweight">
              <PRTable title="Bodyweight Personal Records" data={bodyweightPRs} />
            </TabsContent>
            
            <TabsContent value="cardio">
              <PRTable title="Cardio Personal Records" data={cardioPRs} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">PR Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <p>PR progress charts will be available soon.</p>
            <p className="mt-2 text-sm">Connect your data source to visualize your PR improvements over time.</p>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default PersonalRecords;


import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import WorkoutList from "@/components/WorkoutHistory/WorkoutList";

const WorkoutHistory = () => {
  return (
    <DashboardLayout>
      <PageHeader 
        title="Workout History" 
        description="View and filter your past workouts to track your progress over time."
      />
      
      <WorkoutList />
    </DashboardLayout>
  );
};

export default WorkoutHistory;

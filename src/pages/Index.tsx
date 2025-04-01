
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/Dashboard/StatCard";
import RecentWorkouts from "@/components/Dashboard/RecentWorkouts";
import WorkoutCalendar from "@/components/Dashboard/WorkoutCalendar";
import ProgressChart from "@/components/Progress/ProgressChart";
import PRTable from "@/components/PersonalRecords/PRTable";
import { Activity, Calendar, Award, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <PageHeader 
        title="Fitness Dashboard" 
        description="Track your workouts, see your progress, and beat your personal records."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="This Week"
          value="5 workouts"
          icon={<Activity className="h-5 w-5" />}
          trend={{ value: 25, isPositive: true }}
        />
        <StatCard
          title="Total Volume"
          value="12,540 lbs"
          icon={<TrendingUp className="h-5 w-5" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Workouts"
          value="24 this month"
          icon={<Calendar className="h-5 w-5" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="New PRs"
          value="3 this month"
          icon={<Award className="h-5 w-5" />}
          trend={{ value: 15, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ProgressChart exercise="Bench Press" />
        <WorkoutCalendar />
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <RecentWorkouts />
        <PRTable title="Recent Personal Records" limitRows={3} />
      </div>
    </DashboardLayout>
  );
};

export default Index;

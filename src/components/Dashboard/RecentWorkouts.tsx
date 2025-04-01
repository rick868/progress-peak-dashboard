
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const mockRecentWorkouts = [
  {
    id: 1,
    title: "Upper Body Strength",
    date: "2023-11-25",
    duration: "45 min",
    exercises: ["Bench Press", "Pull-ups", "Shoulder Press"],
  },
  {
    id: 2,
    title: "Leg Day",
    date: "2023-11-23",
    duration: "60 min",
    exercises: ["Squats", "Lunges", "Leg Press"],
  },
  {
    id: 3,
    title: "Cardio Session",
    date: "2023-11-21",
    duration: "30 min",
    exercises: ["Running", "Jumping Rope", "Burpees"],
  },
];

const RecentWorkouts = () => {
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
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Recent Workouts</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link to="/workout-history">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRecentWorkouts.map((workout) => (
            <div key={workout.id} className="p-4 rounded-md border border-gray-200 transition-colors hover:bg-gray-50">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{workout.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>{formatDate(workout.date)}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    <span>{workout.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {workout.exercises.map((exercise, idx) => (
                  <span 
                    key={idx} 
                    className="inline-block px-2 py-1 text-xs font-medium bg-fitness-muted text-fitness-primary rounded"
                  >
                    {exercise}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentWorkouts;


import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock } from "lucide-react";

// Mock data
const workoutData = [
  {
    id: 1,
    title: "Upper Body Strength",
    date: "2023-11-25",
    duration: "45 min",
    type: "Strength",
    exercises: [
      { name: "Bench Press", sets: 4, reps: 8, weight: 185 },
      { name: "Pull-ups", sets: 3, reps: 10, weight: 0 },
      { name: "Shoulder Press", sets: 3, reps: 12, weight: 135 },
      { name: "Bicep Curls", sets: 3, reps: 12, weight: 40 },
      { name: "Tricep Extensions", sets: 3, reps: 12, weight: 35 },
    ],
  },
  {
    id: 2,
    title: "Leg Day",
    date: "2023-11-23",
    duration: "60 min",
    type: "Strength",
    exercises: [
      { name: "Squats", sets: 4, reps: 8, weight: 225 },
      { name: "Lunges", sets: 3, reps: 10, weight: 95 },
      { name: "Leg Press", sets: 3, reps: 12, weight: 360 },
      { name: "Calf Raises", sets: 4, reps: 15, weight: 135 },
    ],
  },
  {
    id: 3,
    title: "Cardio Session",
    date: "2023-11-21",
    duration: "30 min",
    type: "Cardio",
    exercises: [
      { name: "Running", sets: 1, reps: 1, weight: 0, notes: "3 miles" },
      { name: "Jumping Rope", sets: 3, reps: 1, weight: 0, notes: "3 minutes each" },
      { name: "Burpees", sets: 3, reps: 15, weight: 0 },
    ],
  },
  {
    id: 4,
    title: "Full Body Workout",
    date: "2023-11-19",
    duration: "50 min",
    type: "Strength",
    exercises: [
      { name: "Deadlifts", sets: 3, reps: 8, weight: 275 },
      { name: "Push-ups", sets: 3, reps: 15, weight: 0 },
      { name: "Rows", sets: 3, reps: 12, weight: 135 },
      { name: "Squats", sets: 3, reps: 10, weight: 185 },
    ],
  },
  {
    id: 5,
    title: "HIIT Training",
    date: "2023-11-17",
    duration: "25 min",
    type: "HIIT",
    exercises: [
      { name: "Mountain Climbers", sets: 4, reps: 30, weight: 0 },
      { name: "Kettlebell Swings", sets: 4, reps: 15, weight: 35 },
      { name: "Box Jumps", sets: 4, reps: 12, weight: 0 },
      { name: "Battle Ropes", sets: 4, reps: 1, weight: 0, notes: "30 seconds each" },
    ],
  },
  {
    id: 6,
    title: "Chest & Back",
    date: "2023-11-15",
    duration: "45 min",
    type: "Strength",
    exercises: [
      { name: "Incline Bench Press", sets: 4, reps: 8, weight: 165 },
      { name: "Lat Pulldowns", sets: 3, reps: 12, weight: 150 },
      { name: "Chest Flyes", sets: 3, reps: 15, weight: 30 },
      { name: "Rows", sets: 3, reps: 10, weight: 145 },
    ],
  },
  {
    id: 7,
    title: "Recovery Run",
    date: "2023-11-13",
    duration: "35 min",
    type: "Cardio",
    exercises: [
      { name: "Jogging", sets: 1, reps: 1, weight: 0, notes: "3.5 miles" },
      { name: "Stretching", sets: 1, reps: 1, weight: 0, notes: "10 minutes" },
    ],
  },
];

const WorkoutList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filteredWorkouts = workoutData.filter((workout) => {
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          workout.exercises.some(ex => ex.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = typeFilter === "all" || workout.type === typeFilter;
    
    return matchesSearch && matchesType;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Workout History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search workouts or exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Strength">Strength</SelectItem>
                <SelectItem value="Cardio">Cardio</SelectItem>
                <SelectItem value="HIIT">HIIT</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredWorkouts.length > 0 ? (
            filteredWorkouts.map((workout) => (
              <div key={workout.id} className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{workout.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{formatDate(workout.date)}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        <span>{workout.duration}</span>
                        <span className="mx-2">•</span>
                        <span className="px-2 py-0.5 rounded-full bg-fitness-muted text-fitness-primary text-xs font-medium">
                          {workout.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-500 border-b">
                          <th className="pb-2">Exercise</th>
                          <th className="pb-2 text-right">Sets</th>
                          <th className="pb-2 text-right">Reps</th>
                          <th className="pb-2 text-right">Weight</th>
                          {workout.exercises.some(ex => ex.notes) && (
                            <th className="pb-2">Notes</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {workout.exercises.map((exercise, idx) => (
                          <tr key={idx} className="border-b last:border-0">
                            <td className="py-3 font-medium">{exercise.name}</td>
                            <td className="py-3 text-right">{exercise.sets}</td>
                            <td className="py-3 text-right">{exercise.reps}</td>
                            <td className="py-3 text-right">
                              {exercise.weight > 0 ? `${exercise.weight} lbs` : "Bodyweight"}
                            </td>
                            {workout.exercises.some(ex => ex.notes) && (
                              <td className="py-3">{exercise.notes || "-"}</td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No workouts found.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutList;

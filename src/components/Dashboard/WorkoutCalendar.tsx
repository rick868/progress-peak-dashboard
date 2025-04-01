
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

// Mock workout dates
const workoutDates = [
  new Date(2023, 10, 2), // November 2
  new Date(2023, 10, 5), // November 5
  new Date(2023, 10, 8), // November 8
  new Date(2023, 10, 10), // November 10
  new Date(2023, 10, 15), // November 15
  new Date(2023, 10, 18), // November 18
  new Date(2023, 10, 21), // November 21
  new Date(2023, 10, 23), // November 23
  new Date(2023, 10, 25), // November 25
  new Date(2023, 10, 28), // November 28
];

const WorkoutCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Function to modify day rendering
  const modifiers = {
    workout: workoutDates,
  };

  const modifiersStyles = {
    workout: {
      backgroundColor: "#E0F2FE",
      borderRadius: "100%",
      color: "#0EA5E9",
      fontWeight: "bold",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Workout Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="border rounded-md p-3"
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
        />
        <div className="mt-4 flex items-center justify-center text-sm">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 bg-fitness-muted rounded-full mr-2"></div>
            <span className="text-gray-600">Workout Day</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-white border border-gray-300 rounded-full mr-2"></div>
            <span className="text-gray-600">Rest Day</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCalendar;

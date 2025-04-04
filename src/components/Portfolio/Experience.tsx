
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Primus Innovations",
      period: "March 2025 - Present",
      description: "Working on developing responsive and interactive web applications using React and Next.js."
    },
    {
      title: "Inter-University Hackathon",
      organization: "",
      period: "2024 (1 month)",
      description: "Participated in developing a traffic light object detection model used to measure vehicle density in Kenyan highways and record vehicle numberplates for enhanced security."
    }
  ];
  
  const education = [
    {
      degree: "BSc in Information Technology",
      institution: "Murang'a University of Technology",
      period: "2022 - 2026"
    }
  ];
  
  const events = [
    {
      name: "Web3 Developer Workshop",
      organizer: "Avalanche",
      date: "March 2025"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Work Experience */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <Card key={i} className="bg-background/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                {exp.company && (
                  <p className="text-primary font-medium">{exp.company}</p>
                )}
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <Card key={i} className="bg-background/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-primary font-medium">{edu.institution}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Events & Workshops */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Events & Workshops</h2>
        <div className="space-y-4">
          {events.map((event, i) => (
            <Card key={i} className="bg-background/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{event.name}</CardTitle>
                  <span className="text-sm text-muted-foreground">{event.date}</span>
                </div>
                <p className="text-primary font-medium">Organized by: {event.organizer}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;

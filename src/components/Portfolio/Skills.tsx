
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Three.js"]
    },
    {
      name: "Artificial Intelligence",
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "Object Detection", "Model Deployment"]
    },
    {
      name: "Web3 & Blockchain",
      skills: ["Ethereum", "Solidity", "Avalanche", "Smart Contracts", "Web3.js/Ethers.js"]
    },
    {
      name: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design", "SQL/NoSQL Queries"]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, i) => (
          <Card key={i} className="bg-background/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="px-3 py-1 rounded-full bg-primary/10 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;

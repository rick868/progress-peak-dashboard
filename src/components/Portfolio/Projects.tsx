
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Traffic Light Detection System",
      description: "Object detection model used to perform detection on vehicle density in Kenyan highways, read and record vehicles numberplates to enhance security. Connected to a mobile app for route optimization and carbon reduction rewards.",
      imageUrl: "/traffic-ai-project.jpg", // You'll need to add this image
      tags: ["TensorFlow", "Computer Vision", "React Native", "GPS API"],
      liveLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Web3 Decentralized Exchange",
      description: "A decentralized exchange platform built on the Ethereum blockchain enabling users to swap tokens without intermediaries.",
      imageUrl: "/web3-project.jpg", // You'll need to add this image
      tags: ["Solidity", "React", "ethers.js", "Web3"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Interactive 3D Product Viewer",
      description: "A WebGL-powered 3D product viewer allowing users to interact with product models in real-time.",
      imageUrl: "/3d-project.jpg", // You'll need to add this image
      tags: ["Three.js", "WebGL", "JavaScript", "GLSL"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className={`overflow-hidden bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow ${project.featured ? 'border-primary/50' : 'border-primary/20'}`}>
            <div className="h-48 bg-muted relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30" />
              {project.featured && (
                <Badge className="absolute top-2 right-2 bg-primary">
                  Featured
                </Badge>
              )}
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="gap-2">
                <Github size={16} />
                Code
              </Button>
              <Button size="sm" className="gap-2">
                <ExternalLink size={16} />
                Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;

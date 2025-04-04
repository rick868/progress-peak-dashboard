
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <Card className="bg-background/80 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">About Me</CardTitle>
        <CardDescription>
          Frontend Developer | AI Enthusiast | Web3 Developer
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex justify-center">
            {/* Profile image placeholder - you can replace with actual image */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              FG
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              Hi, I'm Felix Gishu. I'm a frontend developer with a passion for creating 
              interactive and responsive web applications. My expertise spans across AI, 
              Web3, and interactive web designs.
            </p>
            <p className="mb-4">
              I'm currently pursuing a BSc in IT at Murang'a University of Technology (2022-2026)
              and working as a frontend developer at Primus Innovations since March 2025.
            </p>
            <p>
              I love pushing the boundaries of what's possible on the web, combining 
              cutting-edge technologies with user-friendly designs.
            </p>
            
            <div className="mt-6">
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;

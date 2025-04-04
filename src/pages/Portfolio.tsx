
import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Canvas } from "@react-three/fiber";
import ThreeDScene from "@/components/Portfolio/ThreeDScene";
import About from "@/components/Portfolio/About";
import Projects from "@/components/Portfolio/Projects";
import Skills from "@/components/Portfolio/Skills";
import Experience from "@/components/Portfolio/Experience";
import Contact from "@/components/Portfolio/Contact";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <DashboardLayout>
      <div className="relative w-full h-full">
        {/* 3D Background */}
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <Canvas>
            <ThreeDScene />
          </Canvas>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
          <PageHeader 
            title="Felix Gishu" 
            description="Frontend Developer | AI Enthusiast | Web3 Developer"
          />
          
          <nav className="mb-12">
            <ul className="flex flex-wrap justify-center gap-6">
              {["about", "projects", "skills", "experience", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => setActiveSection(section)}
                    className={`px-4 py-2 rounded-md transition-all ${
                      activeSection === section
                        ? "bg-primary text-primary-foreground font-medium"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-8">
            {activeSection === "about" && <About />}
            {activeSection === "projects" && <Projects />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "experience" && <Experience />}
            {activeSection === "contact" && <Contact />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Cpu, Database, Bot, Shield } from "lucide-react";

const projects = [
  {
    title: "ARGUS - PPE Detection System",
    date: "Feb 2024",
    description: "Real-time PPE detection system using computer vision to detect safety gear violations for worker surveillance. Presented and approved by BPCL and HP during Dhishna Tech Fest.",
    technologies: ["Python", "YOLOv8", "Roboflow", "Django", "Computer Vision"],
    icon: Eye,
    award: "Winner - Code reCET, CET Trivandrum",
  },
  {
    title: "BINIFY - eWaste Management System",
    date: "Nov 2023",
    description: "Web-based circular economy platform with object detection for e-waste classification using robotic arms. Winner at INKRIT 2.0 Hackathon.",
    technologies: ["Python", "OpenCV", "Arduino", "AI/ML", "Robotics"],
    icon: Cpu,
    award: "Winner - INKRIT 2.0, MES College Aluva",
  },
  {
    title: "DataBot - Natural Language Database Access",
    date: "2024",
    description: "Tool to query and manage databases using natural language prompts via Gemini LLM. Simplifies database interactions for non-technical users.",
    technologies: ["Langchain", "Gemini API", "Flask", "LLMs"],
    icon: Database,
    award: "Runner-up - GistAthon, SNGIST",
  },
  {
    title: "Pentesting & Network Analysis",
    date: "2024",
    description: "Comprehensive lab tasks including traffic capture and analysis using Wireshark for DNS, TCP/IP, and HTTP protocols. Vulnerability scanning using Nessus and Nmap.",
    technologies: ["Kali Linux", "Wireshark", "Nmap", "Nessus", "Cybersecurity"],
    icon: Shield,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building innovative solutions in cybersecurity and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:cyber-glow animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <CardTitle className="text-foreground text-xl">{project.title}</CardTitle>
                  {project.award && (
                    <Badge className="bg-accent/20 text-accent border-accent/50 w-fit">
                      🏆 {project.award}
                    </Badge>
                  )}
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

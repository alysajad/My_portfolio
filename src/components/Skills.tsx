import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C", "C++", "Bash", "SQL", "Django", "RestfulAPI"],
  },
  {
    title: "Cybersecurity Tools",
    icon: Shield,
    skills: ["Wireshark", "Nmap", "SIEM", "Metasploit", "Nessus", "OpenVAS", "JOHN", "HASHCAT"],
  },
  {
    title: "Operating Systems",
    icon: Server,
    skills: ["Kali Linux", "Ubuntu", "Windows"],
  },
  {
    title: "Other Skills",
    icon: Wrench,
    skills: ["HTML/CSS/JS", "Networking", "LaTeX", "MS Office", "Leadership"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:cyber-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <Icon className="h-6 w-6 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary hover:bg-primary/20 hover:border-primary transition-all"
                      >
                        {skill}
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

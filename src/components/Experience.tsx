import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Tech Lead",
    company: "ACES - Association of Computer Engineering Students",
    location: "CUSAT, Kochi",
    period: "Dec 2024 – Present",
    description: [
      "Leading technical initiatives and coordinating cybersecurity workshops, coding bootcamps, and competitive programming events for 200+ students",
      "Mentoring junior students in cybersecurity fundamentals, penetration testing, and secure coding practices",
      "Organizing guest lectures and industry connect sessions with cybersecurity professionals",
      "Managing technical resources and lab setups for departmental events and hackathons",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "ElevateLabs",
    location: "Remote",
    period: "May 2025 – July 2025",
    description: [
      "Performed vulnerability scans using Nessus and OpenVAS, documenting CVEs with severity and remediation paths",
      "Analyzed network traffic using Wireshark and tcpdump, identifying protocol patterns and flagging anomalies",
      "Executed penetration testing tasks including reconnaissance, enumeration, and exploitation using Kali Linux",
      "Configured UFW firewall rules and packet filtering strategies to secure Ubuntu systems",
    ],
  },
  {
    role: "HR Manager",
    company: "TopTrove Foundation",
    location: "Remote",
    period: "May 2024 – Jul 2024",
    description: [
      "Managed human resources operations and team coordination for remote workforce",
      "Conducted recruitment processes including screening, interviews, and onboarding",
      "Developed team management strategies fostering collaboration across distributed teams",
      "Coordinated cross-functional projects ensuring alignment with organizational goals",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Social Summer of Code - United Latino Students Association",
    location: "Remote",
    period: "May 2024",
    description: [
      "Participated in open source development focusing on C++ and C programming projects",
      "Collaborated with international developers on analytical problem-solving challenges",
      "Applied critical thinking to debug, optimize, and enhance existing codebases",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and contributions
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:cyber-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

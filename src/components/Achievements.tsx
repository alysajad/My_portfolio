import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, GraduationCap } from "lucide-react";

const achievements = [
  "Winner – Code reCET, CET Trivandrum (ARGUS Project)",
  "Winner – INKRIT 2.0, MES College Aluva (BINIFY)",
  "Winner – INKRIT 3.0, MES College Aluva",
  "Winner – HACKnTech, BMCE College Ernakulam (VR classroom)",
  "Winner – KMEA college ALOKI (exclusive classroom for specially-abled people)",
  "Winner – Make-a-ton 7.0 'Change Maker' track (Organised by MLH)",
  "Runner-up – Pegasus 3.0, MITS College (stutter-flow)",
  "Runner-up – Magnathon 2.0 IEEE student branch (Team 2nd)",
  "Runner-up – GistAthon, SNGIST (DataBot)",
  "Top 15 – DSA Series by GDSC CUSAT",
];

const certifications = [
  "Google Cybersecurity Certificate – Coursera",
  "Tata Group - Cybersecurity Analyst Job Simulation – Forage",
  "Prompt Design in Vertex AI – Google Cloud Skill Badge",
  "IT Security: Defense against the digital dark arts - Coursera (Google)",
  "Currently pursuing: CEH, SAL1 from TryHackMe",
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Hackathons & Awards</h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="text-muted-foreground flex items-start hover:text-foreground transition-colors"
                  >
                    <Award className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li 
                    key={index}
                    className="text-muted-foreground flex items-start hover:text-foreground transition-colors"
                  >
                    <span className="text-primary mr-3 text-lg">▹</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Education</h4>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">B.Tech in Computer Science Engineering</strong>
                  <br />
                  Cochin University of Science and Technology (CUSAT)
                  <br />
                  <span className="text-primary">GPA: 8.05</span> | 2023 - Present
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

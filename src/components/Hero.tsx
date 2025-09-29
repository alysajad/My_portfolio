import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto z-10 animate-fade-in">
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-4">
            <span className="text-primary text-sm font-semibold">Cybersecurity Professional</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-cyber-glow to-accent bg-clip-text text-transparent">
              Sajad Hussain Malla
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Tech Lead | Cybersecurity Specialist | Full-Stack Developer
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Computer Science Engineering student passionate about cybersecurity, penetration testing, 
            and building innovative solutions. Winner of multiple hackathons and tech competitions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://github.com/alysajad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/sajad-hussain-malla" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:huxi1314k@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

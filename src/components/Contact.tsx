import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss how we can work together
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-card border-border hover:border-primary/50 transition-all duration-300 cyber-glow animate-fade-in">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:huxi1314k@gmail.com"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/70 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">huxi1314k@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+919103321565"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/70 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91-9103321565</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Kochi, Kerala, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                <div className="flex gap-3">
                  <Button 
                    size="icon"
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    onClick={() => window.open('https://github.com/alysajad', '_blank')}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="icon"
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    onClick={() => window.open('https://linkedin.com/in/sajad-hussain-malla', '_blank')}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Social Links</p>
                  <p className="text-foreground font-medium">Connect with me</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow"
                onClick={() => window.location.href = 'mailto:huxi1314k@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

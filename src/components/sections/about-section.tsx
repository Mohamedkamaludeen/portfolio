import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SlideUp } from "@/components/animations/slide-up";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { aboutConfig, heroConfig } from "@/config/siteConfig";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <SlideUp>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{aboutConfig.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about my journey, skills, and passion for development.
            </p>
          </div>
        </SlideUp>

        <div className="max-w-5xl mx-auto space-y-12">
          <SlideUp delay={0.2}>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-muted order-2 md:order-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-8xl font-bold text-muted-foreground/20">
                        JD
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4 order-1 md:order-2">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      {aboutConfig.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <Button asChild>
                      <a href={heroConfig.resumeUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutConfig.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

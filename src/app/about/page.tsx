import { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SlideUp } from "@/components/animations/slide-up";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { aboutConfig, heroConfig } from "@/config/siteConfig";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "About Me",
  description: aboutConfig.bio,
});

export default function AboutPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <SlideUp>
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{aboutConfig.title}</h1>
            <p className="text-xl text-muted-foreground">
              Get to know me better
            </p>
          </div>
        </SlideUp>

        <SlideUp delay={0.2}>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-8xl font-bold text-muted-foreground/20">
                      <Image src={aboutConfig.image} alt="Profile" fill />
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">A Little About Me</h2>
                  <div className="prose prose-sm dark:prose-invert">
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
          {aboutConfig.stats.map((stat, index) => (
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
  );
}

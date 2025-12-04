"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { SlideUp } from "@/components/animations/slide-up";
import { heroConfig, siteConfig } from "@/config/siteConfig";

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = heroConfig.typingTexts;
    const typingSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentText];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {heroConfig.title}
            </h1>
          </FadeIn>

          <SlideUp delay={0.2}>
            <div className="h-12 md:h-16">
              <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {heroConfig.description}
            </p>
          </SlideUp>

          <SlideUp delay={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={heroConfig.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </SlideUp>

          <SlideUp delay={0.8}>
            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}

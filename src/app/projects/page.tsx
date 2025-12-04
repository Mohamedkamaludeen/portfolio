import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SlideUp } from "@/components/animations/slide-up";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { projectsConfig } from "@/config/siteConfig";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Projects",
  description: "A collection of my development projects and side hustles",
});

export default function ProjectsPage() {
  return (
    <div className="container py-20">
      <SlideUp>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">All Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of my work, experiments, and contributions.
          </p>
        </div>
      </SlideUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsConfig.map((project) => (
          <StaggerItem key={project.slug}>
            <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl font-bold text-muted-foreground/20">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge>Featured</Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="secondary">+{project.tags.length - 4}</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link href={`/projects/${project.slug}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {project.github && (
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Live Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

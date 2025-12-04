import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projectsConfig } from "@/config/siteConfig";
import { generateSEO } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsConfig.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projectsConfig.find((p) => p.slug === params.slug);

  if (!project) {
    return {};
  }

  return generateSEO({
    title: project.title,
    description: project.description,
    image: project.image,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsConfig.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button variant="ghost" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.github && (
            <Button asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant="outline" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-muted mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-8xl font-bold text-muted-foreground/20">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {project.longDescription.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Timeline</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {formatDate(project.startDate)}
                      {project.endDate && ` - ${formatDate(project.endDate)}`}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

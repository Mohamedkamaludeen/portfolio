import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Package, BookOpen, FileText, Star, Download, GitFork } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SlideUp } from "@/components/animations/slide-up";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { openSourceConfig } from "@/config/siteConfig";
import { generateSEO } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generateSEO({
  title: "Open Source Contributions",
  description: "My contributions to open source projects, NPM packages, and technical articles",
});

const typeIcons = {
  github: Github,
  npm: Package,
  article: FileText,
  tutorial: BookOpen,
  blog: FileText,
};

const typeColors = {
  github: "bg-gray-900 dark:bg-gray-700",
  npm: "bg-red-600",
  article: "bg-blue-600",
  tutorial: "bg-green-600",
  blog: "bg-purple-600",
};

export default function OpenSourcePage() {
  const featuredContributions = openSourceConfig.filter((c) => c.featured);
  const otherContributions = openSourceConfig.filter((c) => !c.featured);

  return (
    <div className="container py-20">
      <SlideUp>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Open Source Contributions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to the developer community through open source projects, NPM packages, and educational content.
          </p>
        </div>
      </SlideUp>

      {/* Featured Contributions */}
      {featuredContributions.length > 0 && (
        <div className="mb-16">
          <SlideUp delay={0.1}>
            <h2 className="text-2xl font-bold mb-6">Featured Contributions</h2>
          </SlideUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContributions.map((contribution) => {
              const Icon = typeIcons[contribution.type];
              const colorClass = typeColors[contribution.type];
              
              return (
                <StaggerItem key={contribution.id}>
                  <Link 
                    href={contribution.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] duration-300">
                      {contribution.image && (
                        <div className="relative h-48 w-full overflow-hidden bg-muted">
                          <div className={cn(
                            "absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5",
                            colorClass.replace('bg-', 'from-').concat('/20')
                          )} />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className={cn(
                            "p-2 rounded-lg text-white",
                            colorClass
                          )}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="line-clamp-2">{contribution.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{contribution.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Stats */}
                          {contribution.stats && (
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              {contribution.stats.stars !== undefined && (
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4" />
                                  <span>{contribution.stats.stars.toLocaleString()}</span>
                                </div>
                              )}
                              {contribution.stats.forks !== undefined && (
                                <div className="flex items-center gap-1">
                                  <GitFork className="h-4 w-4" />
                                  <span>{contribution.stats.forks.toLocaleString()}</span>
                                </div>
                              )}
                              {contribution.stats.downloads !== undefined && (
                                <div className="flex items-center gap-1">
                                  <Download className="h-4 w-4" />
                                  <span>{contribution.stats.downloads.toLocaleString()}</span>
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {contribution.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      )}

      {/* Other Contributions */}
      {otherContributions.length > 0 && (
        <div>
          <SlideUp delay={0.2}>
            <h2 className="text-2xl font-bold mb-6">All Contributions</h2>
          </SlideUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherContributions.map((contribution) => {
              const Icon = typeIcons[contribution.type];
              const colorClass = typeColors[contribution.type];
              
              return (
                <StaggerItem key={contribution.id}>
                  <Link 
                    href={contribution.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className={cn(
                            "p-2 rounded-lg text-white",
                            colorClass
                          )}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="line-clamp-2">{contribution.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{contribution.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Stats */}
                          {contribution.stats && (
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              {contribution.stats.stars !== undefined && (
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4" />
                                  <span>{contribution.stats.stars.toLocaleString()}</span>
                                </div>
                              )}
                              {contribution.stats.forks !== undefined && (
                                <div className="flex items-center gap-1">
                                  <GitFork className="h-4 w-4" />
                                  <span>{contribution.stats.forks.toLocaleString()}</span>
                                </div>
                              )}
                              {contribution.stats.downloads !== undefined && (
                                <div className="flex items-center gap-1">
                                  <Download className="h-4 w-4" />
                                  <span>{contribution.stats.downloads.toLocaleString()}</span>
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {contribution.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      )}

      {/* Call to Action */}
      <SlideUp delay={0.3}>
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always open to collaborating on interesting open source projects or discussing new ideas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link href="https://github.com/Mohamedkamaludeen" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Profile
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SlideUp>
    </div>
  );
}

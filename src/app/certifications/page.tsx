import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Calendar, Award, Clock, CheckCircle2, Shield, Code, Palette, Users, Cloud, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SlideUp } from "@/components/animations/slide-up";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { certificationsConfig } from "@/config/siteConfig";
import { generateSEO } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generateSEO({
  title: "Certifications",
  description: "Professional certifications and achievements in cloud computing, development, and technology",
});

const categoryIcons = {
  cloud: Cloud,
  development: Code,
  design: Palette,
  management: Users,
  security: Shield,
  education: GraduationCap,
  other: Award,
};

const categoryColors = {
  cloud: "bg-blue-600",
  development: "bg-green-600",
  design: "bg-purple-600",
  management: "bg-orange-600",
  security: "bg-red-600",
  education: "bg-indigo-600",
  other: "bg-gray-600",
};

function isExpired(expiryDate?: string): boolean {
  if (!expiryDate) return false;
  return new Date(expiryDate) < new Date();
}

function isExpiringSoon(expiryDate?: string): boolean {
  if (!expiryDate) return false;
  const expiry = new Date(expiryDate);
  const threeMonthsFromNow = new Date();
  threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
  return expiry < threeMonthsFromNow && expiry > new Date();
}

export default function CertificationsPage() {
  const featuredCertifications = certificationsConfig.filter((c) => c.featured);
  const otherCertifications = certificationsConfig.filter((c) => !c.featured);

  // Group by category
  const certificationsByCategory = certificationsConfig.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof certificationsConfig>);

  return (
    <div className="container py-20">
      <SlideUp>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in cloud computing, software development, and modern technologies.
          </p>
        </div>
      </SlideUp>

      {/* Stats Overview */}
      <SlideUp delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {certificationsConfig.length}
                </div>
                <div className="text-sm text-muted-foreground">Total Certifications</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {certificationsConfig.filter(c => !isExpired(c.expiryDate)).length}
                </div>
                <div className="text-sm text-muted-foreground">Active</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {Object.keys(certificationsByCategory).length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {featuredCertifications.length}
                </div>
                <div className="text-sm text-muted-foreground">Featured</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SlideUp>

      {/* Featured Certifications */}
      {featuredCertifications.length > 0 && (
        <div className="mb-16">
          <SlideUp delay={0.2}>
            <h2 className="text-2xl font-bold mb-6">Featured Certifications</h2>
          </SlideUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCertifications.map((cert) => {
              const Icon = categoryIcons[cert.category] || Award;
              const colorClass = categoryColors[cert.category] || "bg-gray-600";
              const expired = isExpired(cert.expiryDate);
              const expiringSoon = isExpiringSoon(cert.expiryDate);
              
              return (
                <StaggerItem key={cert.id}>
                  <Link 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className={cn(
                      "h-full hover:shadow-lg transition-all hover:scale-[1.02] duration-300",
                      expired && "opacity-60"
                    )}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className={cn(
                            "p-2 rounded-lg text-white",
                            colorClass
                          )}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                            {!expired && !cert.expiryDate && (
                              <Badge variant="outline" className="text-xs">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Valid
                              </Badge>
                            )}
                            {expiringSoon && (
                              <Badge variant="outline" className="text-xs text-orange-600">
                                <Clock className="h-3 w-3 mr-1" />
                                Expiring Soon
                              </Badge>
                            )}
                            {expired && (
                              <Badge variant="outline" className="text-xs text-red-600">
                                Expired
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2">{cert.title}</CardTitle>
                        <CardDescription className="font-semibold text-foreground/80">
                          {cert.issuer}
                        </CardDescription>
                        <CardDescription className="line-clamp-3 mt-2">
                          {cert.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Date Info */}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Issued {formatDate(cert.date)}</span>
                          </div>
                          
                          {cert.expiryDate && !expired && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>Expires {formatDate(cert.expiryDate)}</span>
                            </div>
                          )}

                          {/* Credential ID */}
                          {cert.credentialId && (
                            <div className="text-xs text-muted-foreground font-mono bg-muted p-2 rounded">
                              ID: {cert.credentialId}
                            </div>
                          )}
                          
                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.slice(0, 3).map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                            {cert.skills.length > 3 && (
                              <Badge variant="secondary">
                                +{cert.skills.length - 3} more
                              </Badge>
                            )}
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

      {/* All Certifications by Category */}
      <div>
        <SlideUp delay={0.3}>
          <h2 className="text-2xl font-bold mb-6">All Certifications</h2>
        </SlideUp>
        
        {Object.entries(certificationsByCategory).map(([category, certs], index) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons] || Award;
          const colorClass = categoryColors[category as keyof typeof categoryColors] || "bg-gray-600";
          
          return (
            <div key={category} className="mb-12">
              <SlideUp delay={0.3 + index * 0.05}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("p-2 rounded-lg text-white", colorClass)}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold capitalize">{category}</h3>
                  <Badge variant="outline">{certs.length}</Badge>
                </div>
              </SlideUp>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert) => {
                  const expired = isExpired(cert.expiryDate);
                  const expiringSoon = isExpiringSoon(cert.expiryDate);
                  
                  return (
                    <StaggerItem key={cert.id}>
                      <Link 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <Card className={cn(
                          "h-full hover:shadow-lg transition-all hover:scale-[1.02] duration-300",
                          expired && "opacity-60"
                        )}>
                          <CardHeader>
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <CardTitle className="text-lg line-clamp-2">{cert.title}</CardTitle>
                              <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            </div>
                            <CardDescription className="font-semibold">
                              {cert.issuer}
                            </CardDescription>
                            {!expired && !cert.expiryDate && (
                              <Badge variant="outline" className="text-xs w-fit mt-2">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Active
                              </Badge>
                            )}
                            {expiringSoon && (
                              <Badge variant="outline" className="text-xs w-fit mt-2 text-orange-600">
                                <Clock className="h-3 w-3 mr-1" />
                                Expiring Soon
                              </Badge>
                            )}
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDate(cert.date)}</span>
                              </div>
                              
                              <div className="flex flex-wrap gap-2">
                                {cert.skills.slice(0, 2).map((skill) => (
                                  <Badge key={skill} variant="secondary" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                                {cert.skills.length > 2 && (
                                  <Badge variant="secondary" className="text-xs">
                                    +{cert.skills.length - 2}
                                  </Badge>
                                )}
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
          );
        })}
      </div>

      {/* Call to Action */}
      <SlideUp delay={0.4}>
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground mb-6">
                I believe in continuous learning and staying updated with the latest technologies and best practices. 
                Currently pursuing additional certifications in advanced cloud architecture and DevOps.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Let&apos;s Connect
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </SlideUp>
    </div>
  );
}

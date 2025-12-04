import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SlideUp } from "@/components/animations/slide-up";
import { experienceConfig } from "@/config/siteConfig";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the amazing companies I've worked with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceConfig.map((exp, index) => (
            <SlideUp key={exp.id} delay={index * 0.1}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-lg text-primary font-semibold mt-1">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        {exp.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}

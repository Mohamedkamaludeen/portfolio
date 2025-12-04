import { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience-section";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Work Experience",
  description: "My professional journey and work experience",
});

export default function ExperiencePage() {
  return (
    <div className="py-20">
      <ExperienceSection />
    </div>
  );
}

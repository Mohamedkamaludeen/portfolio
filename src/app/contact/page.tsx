import { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { generateSEO } from "@/lib/seo";
import { contactConfig } from "@/config/siteConfig";

export const metadata: Metadata = generateSEO({
  title: "Contact Me",
  description: contactConfig.description,
});

export default function ContactPage() {
  return (
    <div className="py-20">
      <ContactForm />
    </div>
  );
}

import { Metadata } from "next";

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  tags?: string[];
}

export function generateSEO({
  title,
  description,
  image = "/og-image.png",
  url = "https://yourportfolio.com",
  type = "website",
  author = "Mohamed Kamaludeen",
  publishedTime,
  tags = [],
}: SEOProps): Metadata {
  return {
    title,
    description,
    authors: [{ name: author }],
    keywords: tags,
    openGraph: {
      type: type as any,
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@yourusername",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

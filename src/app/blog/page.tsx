import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SlideUp } from "@/components/animations/slide-up";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { getAllBlogPosts } from "@/lib/mdx";
import { generateSEO } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = generateSEO({
  title: "Blog",
  description: "Thoughts, tutorials, and insights on web development",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="container py-20">
      <SlideUp>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, design, and technology.
          </p>
        </div>
      </SlideUp>

      {posts.length === 0 ? (
        <SlideUp delay={0.2}>
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">
                No blog posts yet. Check back soon!
              </p>
            </CardContent>
          </Card>
        </SlideUp>
      ) : (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  {post.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
}

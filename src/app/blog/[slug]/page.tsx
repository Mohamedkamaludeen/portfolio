import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/mdx";
import { generateSEO } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return generateSEO({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    type: "article",
    publishedTime: post.frontmatter.date,
    tags: post.frontmatter.tags,
    author: post.frontmatter.author,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-20">
      <article className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <header className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            {post.frontmatter.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {post.frontmatter.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.frontmatter.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <span>By {post.frontmatter.author}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Calendar } from "lucide-react"
import { getPostBySlug, posts } from "@/lib/posts-data"
import { Header } from "@/components/header"

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return { title: "Post Not Found" }
  }
  
  return {
    title: `${post.title} | Jiraphapa Jiravaraphan`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/" className="hover:text-foreground transition-colors">
            {post.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </nav>
        
        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          {post.title}
        </h1>
        
        {/* Excerpt */}
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
        
        {/* Author */}
        <div className="mt-6 flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={post.authorAvatar || "/placeholder.svg"}
              alt={post.author}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-medium text-foreground">{post.author}</span>
        </div>
        
        {/* Featured Image */}
        <div className="mt-10 relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Category and Date */}
        <div className="mt-10 flex items-center gap-4">
          <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wide">
            {post.category}
          </Badge>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
        
        {/* Content */}
        <article className="mt-8 space-y-10">
          {/* Introduction */}
          <p className="text-base leading-relaxed text-muted-foreground">
            {post.content.intro}
          </p>
          
          {/* Sections */}
          {post.content.sections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3 text-base">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">
                      <span className="font-semibold text-foreground">{item.label}:</span>{" "}
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </article>
        
        {/* Back link */}
        <div className="mt-16 border-t pt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to all posts
          </Link>
        </div>
      </main>
    </div>
  )
}

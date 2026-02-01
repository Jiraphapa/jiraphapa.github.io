"use client"

import { PostCard } from "./post-card"
import { posts } from "@/lib/posts-data"

export function KnowledgeSharing() {
  return (
    <section className="py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">All posts</h1>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} slug={post.slug} category={post.category} title={post.title} excerpt={post.excerpt} date={post.date} author={post.author} imageUrl={post.imageUrl} />
        ))}
      </div>
    </section>
  )
}

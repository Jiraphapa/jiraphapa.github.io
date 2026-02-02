"use client"

import { useState } from "react"
import { PostCard } from "./post-card"
import { posts } from "@/lib/posts-data"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const POSTS_PER_PAGE = 6

export function KnowledgeSharing() {
  const { t } = useLanguage()
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE)
  
  const visiblePosts = posts.slice(0, visibleCount)
  const hasMorePosts = visibleCount < posts.length

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, posts.length))
  }

  return (
    <section className="py-16">
      <div className="mb-12">
        <h1 className="flex items-center gap-3 text-4xl font-bold text-foreground sm:text-5xl">
          <span>■</span>
          <span>{t("blog.recentPosts")}</span>
        </h1>
      </div>
      
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <PostCard key={post.slug} slug={post.slug} category={post.category} title={post.title} excerpt={post.excerpt} date={post.date} author={post.author} imageUrl={post.imageUrl} />
        ))}
      </div>

      {hasMorePosts && (
        <div className="mt-12 flex justify-center">
          <Button 
            onClick={loadMore}
            className="px-8 py-6 text-base font-semibold"
          >
            {t("blog.loadMore")}
          </Button>
        </div>
      )}
    </section>
  )
}
"use client"

import { PostCard } from "./post-card"

const posts = [
  {
    category: "Cloud Architecture",
    title: "Designing Scalable Multi-Region AWS Architectures for Enterprise",
    excerpt: "Learn how to design fault-tolerant, highly available systems that span multiple AWS regions while maintaining low latency and cost efficiency.",
    date: "JAN 28, 2026",
    author: "ALEX CHEN",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
  {
    category: "DevOps",
    title: "Implementing GitOps Workflows with ArgoCD and Kubernetes",
    excerpt: "A practical guide to setting up GitOps pipelines that automate deployments and improve team collaboration across environments.",
    date: "JAN 25, 2026",
    author: "ALEX CHEN",
    imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
  },
  {
    category: "Security",
    title: "Zero Trust Architecture: A Complete Implementation Guide",
    excerpt: "Explore the principles of Zero Trust and learn how to implement this security model in your organization step by step.",
    date: "JAN 20, 2026",
    author: "ALEX CHEN",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    category: "Microservices",
    title: "Event-Driven Architecture Patterns for Modern Applications",
    excerpt: "Discover how event-driven patterns can help you build loosely coupled, scalable microservices that handle millions of events.",
    date: "JAN 15, 2026",
    author: "ALEX CHEN",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    category: "AI/ML",
    title: "Building Production-Ready ML Pipelines on Cloud Platforms",
    excerpt: "From model training to deployment - a comprehensive guide to implementing MLOps practices that scale with your organization.",
    date: "JAN 10, 2026",
    author: "ALEX CHEN",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    category: "Data Engineering",
    title: "Real-Time Data Streaming with Apache Kafka and Flink",
    excerpt: "Learn to build robust streaming data pipelines that process millions of events per second with exactly-once semantics.",
    date: "JAN 5, 2026",
    author: "ALEX CHEN",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
  },
]

export function KnowledgeSharing() {
  return (
    <section className="py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">All posts</h1>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  )
}

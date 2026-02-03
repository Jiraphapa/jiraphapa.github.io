import fs from "fs"
import path from "path"
import { parseFrontmatter } from "./frontmatter"

export interface Post {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  author: string
  authorAvatar: string
  imageUrl: string
  content: {
    intro: string
    sections: {
      title: string
      items: {
        label: string
        description: string
      }[]
    }[]
  }
}

const POSTS_DIR = path.join(process.cwd(), "data/posts")

// Cache for development to avoid re-reading files on every request
let cachedPosts: Post[] | null = null

function parsePostContent(content: string): Post["content"] {
  // Split content into lines
  const lines = content.split("\n")
  const sections: Post["content"]["sections"] = []
  let currentSection: any = null
  let intro = ""

  for (const line of lines) {
    const trimmed = line.trim()

    // Check for section headers (## or ###)
    if (trimmed.startsWith("## ")) {
      if (currentSection) {
        sections.push(currentSection)
      }
      currentSection = {
        title: trimmed.replace(/^##\s+/, ""),
        items: []
      }
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      // List items
      const itemText = trimmed.replace(/^[-*]\s+/, "")
      const colonIndex = itemText.indexOf(":")
      if (colonIndex > 0) {
        const label = itemText.slice(0, colonIndex).trim()
        const description = itemText.slice(colonIndex + 1).trim()
        if (currentSection) {
          currentSection.items.push({ label, description })
        }
      }
    } else if (trimmed && !currentSection && !trimmed.startsWith("#")) {
      // Intro text (before first section)
      intro += (intro ? " " : "") + trimmed
    }
  }

  if (currentSection) {
    sections.push(currentSection)
  }

  return { intro: intro || content, sections }
}

export async function getPosts(): Promise<Post[]> {
  // Return cached posts in development if available
  if (cachedPosts && process.env.NODE_ENV === "development") {
    return cachedPosts
  }

  // Ensure posts directory exists
  if (!fs.existsSync(POSTS_DIR)) {
    return []
  }

  const files = fs.readdirSync(POSTS_DIR)
  const posts: Post[] = []

  for (const file of files) {
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) continue

    const filePath = path.join(POSTS_DIR, file)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = parseFrontmatter(fileContent)

    const slug = file.replace(/\.mdx?$/, "")

    posts.push({
      slug,
      category: data.category || "Uncategorized",
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date || "",
      author: data.author || "Jiraphapa Jiravaraphan",
      authorAvatar: data.authorAvatar || "https://media.licdn.com/dms/image/v2/C4E03AQEYatDATIXCDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653991221607?e=1771459200&v=beta&t=M8uQkzQufx618ecBwpz__8OvSGxrUHbMir14t7vM9v4",
      imageUrl: data.imageUrl || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      content: parsePostContent(content),
    })
  }

  // Sort by date (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  cachedPosts = posts
  return posts
}

// For client components, export a synchronous version
export const posts: Post[] = []

// This function should be used in server components
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const allPosts = await getPosts()
  return allPosts.find((post) => post.slug === slug)
}

// Legacy sync function for backward compatibility (will be phased out)
export function getPostBySlugSync(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
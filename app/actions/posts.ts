"use server"

import { getPosts } from "@/lib/posts-data"

export async function fetchPosts() {
  return await getPosts()
}
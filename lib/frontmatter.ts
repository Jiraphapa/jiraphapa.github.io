import fs from "fs"
import path from "path"

export interface FrontmatterResult<T = any> {
  data: T
  content: string
}

export function parseFrontmatter(content: string): FrontmatterResult {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return { data: {}, content }
  }

  const frontmatterText = match[1]
  const bodyContent = match[2]

  const data: Record<string, any> = {}

  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()

      // Handle quoted strings
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      // Handle arrays
      else if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value)
        } catch {
          // Keep as string if parse fails
        }
      }
      // Handle booleans
      else if (value === 'true') {
        value = true
      } else if (value === 'false') {
        value = false
      }
      // Handle numbers
      else if (!isNaN(Number(value))) {
        value = Number(value)
      }

      data[key] = value
    }
  })

  return { data, content: bodyContent }
}

export async function getAllMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = []

  async function readDirectory(directory: string) {
    const entries = fs.readdirSync(directory, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        await readDirectory(fullPath)
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        files.push(fullPath)
      }
    }
  }

  await readDirectory(dir)
  return files
}
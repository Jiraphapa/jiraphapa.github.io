import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface PostCardProps {
  category: string
  title: string
  excerpt: string
  date: string
  author: string
  imageUrl: string
  sponsored?: boolean
}

export function PostCard({
  category,
  title,
  excerpt,
  date,
  author,
  imageUrl,
  sponsored = false,
}: PostCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge variant="secondary" className="bg-background text-foreground text-xs font-medium uppercase tracking-wide">
            {category}
          </Badge>
          {sponsored && (
            <Badge variant="secondary" className="bg-background/90 text-foreground text-xs font-medium">
              Sponsored
            </Badge>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <time>{date}</time>
          <span>/</span>
          <span>POST BY</span>
          <span className="font-medium text-foreground">{author}</span>
        </div>
        
        <h3 className="text-lg font-semibold leading-tight text-foreground text-balance group-hover:underline">
          {title}
        </h3>
        
        <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
          {excerpt}
        </p>
      </div>
    </article>
  )
}

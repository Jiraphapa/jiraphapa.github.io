"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeTab: "knowledge" | "about"
  onTabChange: (tab: "knowledge" | "about") => void
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <span className="text-sm font-bold text-primary-foreground">JJ</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Jiraphapa</span>
          </Link>
          
          <nav className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => onTabChange("knowledge")}
              className={`text-sm font-medium transition-colors ${
                activeTab === "knowledge"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Knowledge Sharing
            </button>
            <button
              onClick={() => onTabChange("about")}
              className={`text-sm font-medium transition-colors ${
                activeTab === "about"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </button>
          </nav>
        </div>

        <Button className="hidden gap-2 sm:flex">
          {"Let's Talk"}
          <ArrowRight className="h-4 w-4" />
        </Button>

        {/* Mobile navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => onTabChange("knowledge")}
            className={`text-sm font-medium ${
              activeTab === "knowledge" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => onTabChange("about")}
            className={`text-sm font-medium ${
              activeTab === "about" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            About
          </button>
        </div>
      </div>
    </header>
  )
}

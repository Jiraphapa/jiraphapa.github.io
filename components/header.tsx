"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeTab?: "knowledge" | "about"
  onTabChange?: (tab: "knowledge" | "about") => void
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const handleTabClick = (tab: "knowledge" | "about") => {
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  // If no onTabChange provided, use links for navigation
  const NavItem = ({ tab, label }: { tab: "knowledge" | "about"; label: string }) => {
    const isActive = activeTab === tab
    const className = `text-sm font-medium transition-colors ${
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`

    if (onTabChange) {
      return (
        <button onClick={() => handleTabClick(tab)} className={className}>
          {label}
        </button>
      )
    }

    return (
      <Link href={`/?tab=${tab}`} className={className}>
        {label}
      </Link>
    )
  }

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
            <NavItem tab="knowledge" label="Knowledge Sharing" />
            <NavItem tab="about" label="About" />
          </nav>
        </div>

        {/* <Button className="hidden gap-2 sm:flex">
          {"Let's Talk"}
          <ArrowRight className="h-4 w-4" />
        </Button> */}

        {/* Mobile navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <NavItem tab="knowledge" label="Articles" />
          <NavItem tab="about" label="About" />
        </div>
      </div>
    </header>
  )
}

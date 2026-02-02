"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "./language-toggle"

interface HeaderProps {
  activeTab?: "knowledge" | "about"
  onTabChange?: (tab: "knowledge" | "about") => void
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const { t } = useLanguage()
  
  const handleTabClick = (tab: "knowledge" | "about") => {
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  // If no onTabChange provided, use links for navigation
  const NavItem = ({ tab, labelKey }: { tab: "knowledge" | "about"; labelKey: string }) => {
    const isActive = activeTab === tab
    const baseClassName = "text-sm transition-colors"
    const activeClassName = `${baseClassName} font-bold text-foreground`
    const inactiveClassName = `${baseClassName} font-medium text-muted-foreground hover:text-foreground`

    const content = isActive ? (
      <span className="flex items-center gap-1">
        <span className="text-xs">■</span>
        {t(labelKey)}
      </span>
    ) : (
      t(labelKey)
    )

    if (onTabChange) {
      return (
        <button onClick={() => handleTabClick(tab)} className={isActive ? activeClassName : inactiveClassName}>
          {content}
        </button>
      )
    }

    return (
      <Link href={`/?tab=${tab}`} className={isActive ? activeClassName : inactiveClassName}>
        {content}
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
            <NavItem tab="knowledge" labelKey="nav.blog" />
            <NavItem tab="about" labelKey="nav.about" />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <NavItem tab="knowledge" labelKey="nav.blog" />
            <NavItem tab="about" labelKey="nav.about" />
          </div>
          
          {/* Language toggle */}
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
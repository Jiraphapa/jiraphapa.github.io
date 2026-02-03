"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { KnowledgeSharing } from "@/components/knowledge-sharing"
import { AboutSection } from "@/components/about-section"

function HomeContent() {
  const [activeTab, setActiveTab] = useState<"knowledge" | "about">("knowledge")
  const searchParams = useSearchParams()

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "about" || tab === "knowledge") {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {activeTab === "knowledge" ? <KnowledgeSharing /> : <AboutSection />}
      </main>

      <footer className="mt-20 border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>© 2026 Jiraphapa Jiravaraphan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  )
}

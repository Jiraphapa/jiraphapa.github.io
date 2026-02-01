"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { KnowledgeSharing } from "@/components/knowledge-sharing"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"knowledge" | "about">("knowledge")

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {activeTab === "knowledge" ? <KnowledgeSharing /> : <AboutSection />}
      </main>

      <footer className="mt-20 border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>{"© 2026 Alex Chen. All rights reserved."}</p>
        </div>
      </footer>
    </div>
  )
}

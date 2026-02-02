"use client"

import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const experience = [
  {
    period: "12/2021 — 12/2025",
    role: "IT Consultant: Cloud & DevSecOps",
    company: "Netlight Consulting",
    location: "Munich, Germany",
    description: "Premium strategic IT consultancy for global enterprises.",
    skills: ["Cloud", "DevSecOps"],
  },
  {
    period: "09/2020 — 05/2021",
    role: "Cloud Architect/Engineer: High-Performance Computing (HPC) in the Cloud",
    company: "BMW AG",
    location: "Munich, Germany",
    description: "Global automotive leader with large-scale infrastructure.",
    skills: ["HPC", "Cloud"],
  },
]

const certifications = [
  {
    name: "AWS Solutions Architect Associate",
    credlyUrl: "https://www.credly.com/badges/your-aws-badge-id",
  },
]

export function AboutSection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-12">
      <div className="grid gap-12 lg:grid-cols-[280px,1fr] lg:gap-16">
        {/* Left sidebar */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Jiraphapa Jiravaraphan</h1>
            <p className="mt-2 text-lg text-muted-foreground">{t("about.role")}</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{t("about.location")}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("about.bio")}
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-3">
            <a href="#about" className="flex items-center gap-3 text-sm font-medium text-foreground">
              <span className="h-px w-8 bg-foreground" />
              {t("about.title")}
            </a>
            <a href="#experience" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <span className="h-px w-8 bg-muted-foreground" />
              {t("about.experience")}
            </a>
            <a href="#certifications" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <span className="h-px w-8 bg-muted-foreground" />
              {t("about.certifications")}
            </a>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        {/* Right content */}
        <div className="space-y-12">
          {/* About */}
          <div id="about" className="space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              {t("about.intro") + " "}
              <span className="font-medium text-foreground">{t("about.cloudInfra")}</span>
              {", "}
              <span className="font-medium text-foreground">{t("about.distributedSystems")}</span>
              {", "}
              <span className="font-medium text-foreground">{t("about.enterpriseArch")}</span>
              {t("about.introEnd")}
            </p>
            
          </div>

          {/* Experience */}
          <div id="experience" className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="group grid gap-4 rounded-lg p-4 transition-colors hover:bg-muted/50 sm:grid-cols-[140px,1fr]">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {exp.period}
                </span>
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div id="certifications" className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {t("about.certifications")}
            </h2>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  <Link 
                    href={cert.credlyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                  >
                    {cert.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
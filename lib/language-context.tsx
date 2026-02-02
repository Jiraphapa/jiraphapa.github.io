"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "th"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.blog": "Blog",
    "nav.about": "About",
    
    // Blog section
    "blog.recentPosts": "RECENT POSTS",
    "blog.loadMore": "LOAD MORE",
    "blog.postBy": "POST BY",
    "blog.home": "Home",
    
    // About section
    "about.title": "ABOUT",
    "about.experience": "EXPERIENCE",
    "about.certifications": "Certifications",
    "about.role": "Solutions Architect · Open Source Educator",
    "about.location": "Bangkok, Thailand",
    "about.bio": "I design scalable, secure, and cost-effective cloud solutions for the modern enterprise.",
    "about.intro": "I'm a Solutions Architect passionate about building robust, scalable systems that solve real business problems. My work sits at the intersection of",
    "about.cloudInfra": "cloud infrastructure",
    "about.distributedSystems": "distributed systems",
    "about.enterpriseArch": "enterprise architecture",
    "about.introEnd": ", creating solutions that are not only technically sound but also aligned with business objectives.",
    
    // Experience
    "exp.netlight.role": "IT Consultant: Cloud & DevSecOps",
    "exp.netlight.desc": "Premium strategic IT consultancy for global enterprises.",
    "exp.bmw.role": "Cloud Architect/Engineer: High-Performance Computing (HPC) in the Cloud",
    "exp.bmw.desc": "Global automotive leader with large-scale infrastructure.",
    
    // Footer
    "footer.rights": "© 2026 Jiraphapa Jiravaraphan. All rights reserved.",
    
    // Categories
    "cat.cloudArchitecture": "Cloud Architecture",
    "cat.devops": "DevOps",
    "cat.security": "Security",
    "cat.microservices": "Microservices",
    "cat.aiml": "AI/ML",
    "cat.dataEngineering": "Data Engineering",
  },
  th: {
    // Navigation
    "nav.blog": "บล็อก",
    "nav.about": "เกี่ยวกับ",
    
    // Blog section
    "blog.recentPosts": "บทความล่าสุด",
    "blog.loadMore": "โหลดเพิ่มเติม",
    "blog.postBy": "เขียนโดย",
    "blog.home": "หน้าแรก",
    
    // About section
    "about.title": "เกี่ยวกับ",
    "about.experience": "ประสบการณ์",
    "about.certifications": "ใบรับรอง",
    "about.role": "Solutions Architect · Open Source Educator",
    "about.location": "กรุงเทพฯ, ประเทศไทย",
    "about.bio": "ฉันออกแบบโซลูชันคลาวด์ที่สามารถขยายตัวได้ ปลอดภัย และคุ้มค่าสำหรับองค์กรยุคใหม่",
    "about.intro": "ฉันเป็น Solutions Architect ที่หลงใหลในการสร้างระบบที่แข็งแกร่งและปรับขนาดได้เพื่อแก้ปัญหาทางธุรกิจจริง งานของฉันอยู่ที่จุดตัดของ",
    "about.cloudInfra": "โครงสร้างพื้นฐานคลาวด์",
    "about.distributedSystems": "ระบบกระจาย",
    "about.enterpriseArch": "สถาปัตยกรรมองค์กร",
    "about.introEnd": " สร้างโซลูชันที่ไม่เพียงแต่มีความถูกต้องทางเทคนิค แต่ยังสอดคล้องกับวัตถุประสงค์ทางธุรกิจ",
    
    // Experience
    "exp.netlight.role": "ที่ปรึกษาไอที: Cloud & DevSecOps",
    "exp.netlight.desc": "บริษัทที่ปรึกษาไอทีเชิงกลยุทธ์ระดับพรีเมียมสำหรับองค์กรระดับโลก",
    "exp.bmw.role": "Cloud Architect/Engineer: High-Performance Computing (HPC) in the Cloud",
    "exp.bmw.desc": "ผู้นำด้านยานยนต์ระดับโลกที่มีโครงสร้างพื้นฐานขนาดใหญ่",
    
    // Footer
    "footer.rights": "© 2026 จิราภา จิรวราภรณ์ สงวนลิขสิทธิ์",
    
    // Categories
    "cat.cloudArchitecture": "สถาปัตยกรรมคลาวด์",
    "cat.devops": "DevOps",
    "cat.security": "ความปลอดภัย",
    "cat.microservices": "ไมโครเซอร์วิส",
    "cat.aiml": "AI/ML",
    "cat.dataEngineering": "วิศวกรรมข้อมูล",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
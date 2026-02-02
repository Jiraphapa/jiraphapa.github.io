"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "th" : "en")}
      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
      aria-label={language === "en" ? "Switch to Thai" : "Switch to English"}
    >
      {language === "en" ? (
        <>
          {/* UK/US Flag for English */}
          <svg className="h-5 w-5 rounded-sm overflow-hidden" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#00247D" width="36" height="36"/>
            <path fill="#CF1B2B" d="M0 0l36 27v-4L6.31 0H0zm36 36L0 9v4l29.69 23H36z"/>
            <path fill="#EEE" d="M36 12.34L20.14 0h5.45L36 8.21v4.13zM0 23.66L15.86 36h-5.45L0 27.79v-4.13zM4.83 0L36 23.14v-4.75L10.28 0H4.83zM31.17 36L0 12.86v4.75l25.72 18.39h5.45z"/>
            <path fill="#CF1B2B" d="M13 0v13H0v10h13v13h10V23h13V13H23V0H13z"/>
            <path fill="#EEE" d="M36 14.5V10H23.14L36 0h-4L18 11.75 4 0H0l13.14 10H0v4.5l7.5 5.75L0 26v4l18-14.25L36 30v-4l-7.5-5.75L36 14.5z"/>
          </svg>
          <span className="hidden sm:inline">EN</span>
        </>
      ) : (
        <>
          {/* Thai Flag */}
          <svg className="h-5 w-5 rounded-sm overflow-hidden" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#A51931" width="36" height="6"/>
            <rect fill="#F4F5F8" y="6" width="36" height="6"/>
            <rect fill="#2D2A4A" y="12" width="36" height="12"/>
            <rect fill="#F4F5F8" y="24" width="36" height="6"/>
            <rect fill="#A51931" y="30" width="36" height="6"/>
          </svg>
          <span className="hidden sm:inline">TH</span>
        </>
      )}
    </button>
  )
}
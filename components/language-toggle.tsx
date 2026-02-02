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
                    <svg
                        className="h-5 w-5 rounded-sm overflow-hidden"
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="36" height="36" fill="#012169" />
                        <path
                            d="M0 0 L36 36 M36 0 L0 36"
                            stroke="#FFF"
                            strokeWidth="6"
                        />
                        <path
                            d="M0 0 L36 36 M36 0 L0 36"
                            stroke="#C8102E"
                            strokeWidth="4"
                        />
                        <path
                            d="M18 0 v36 M0 18 h36"
                            stroke="#FFF"
                            strokeWidth="10"
                        />
                        <path
                            d="M18 0 v36 M0 18 h36"
                            stroke="#C8102E"
                            strokeWidth="6"
                        />
                    </svg>

                    <span className="hidden sm:inline">EN</span>
                </>
            ) : (
                <>
                    {/* Thai Flag */}
                    <svg className="h-5 w-5 rounded-sm overflow-hidden" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="#A51931" width="36" height="6" />
                        <rect fill="#F4F5F8" y="6" width="36" height="6" />
                        <rect fill="#2D2A4A" y="12" width="36" height="12" />
                        <rect fill="#F4F5F8" y="24" width="36" height="6" />
                        <rect fill="#A51931" y="30" width="36" height="6" />
                    </svg>
                    <span className="hidden sm:inline">TH</span>
                </>
            )}
        </button>
    )
}
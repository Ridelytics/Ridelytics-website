import { useState } from 'react'

function Footer() {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false)
  const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false)

  return (
    <footer className="relative bg-black border-t border-white/10 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-inter font-semibold text-xl text-foreground">
              RideLytics
            </h3>
            <p className="font-inter text-sm text-muted leading-relaxed max-w-xs">
              Measure impressions, engagement, and conversions from mobile digital screens in real time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <button
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              className="md:cursor-default flex items-center justify-between w-full md:pointer-events-none"
            >
              <h4 className="font-inter font-medium text-base text-foreground text-left">
                Quick Links
              </h4>
              <svg 
                className={`w-5 h-5 text-foreground transition-transform md:hidden ${isQuickLinksOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <nav className={`flex-col space-y-3 ${isQuickLinksOpen ? 'flex' : 'hidden'} md:flex`}>
              <a href="#advertisers" className="text-sm text-muted hover:text-foreground transition-colors">
                Advertisers
              </a>
              <a href="#drivers" className="text-sm text-muted hover:text-foreground transition-colors">
                Drivers
              </a>
              <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">
                Features
              </a>
            </nav>
          </div>

          {/* Contact & About */}
          <div className="space-y-4">
            <button
              onClick={() => setIsGetInTouchOpen(!isGetInTouchOpen)}
              className="md:cursor-default flex items-center justify-between w-full md:pointer-events-none"
            >
              <h4 className="font-inter font-medium text-base text-foreground text-left">
                Get in Touch
              </h4>
              <svg 
                className={`w-5 h-5 text-foreground transition-transform md:hidden ${isGetInTouchOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`flex-col gap-3 ${isGetInTouchOpen ? 'flex' : 'hidden'} md:flex`}>
              <a 
                href="#contact" 
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Contact us
              </a>
              <a 
                href="#about" 
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                About us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} RideLytics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-sm text-muted hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


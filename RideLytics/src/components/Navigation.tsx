import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1400px] px-2 sm:px-4 pt-2 sm:pt-4">
      <nav className="bg-black rounded-xl shadow-[0px_16px_68px_0px_rgba(47,48,55,0.05),0px_0px_4px_0px_rgba(34,42,53,0.08),0px_0px_0px_1px_rgba(34,42,53,0.04),0px_1px_1px_0px_rgba(0,0,0,0.05),0px_0px_24px_0px_rgba(34,42,53,0.06)] relative">
        {/* Desktop Navigation */}
        <div className="h-[70px] flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="font-inter font-medium text-sm text-foreground flex-shrink-0">
            RideLytics
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8">
            <a href="#advertisers" className="nav-link">
              Advertisers
            </a>
            <a href="#drivers" className="nav-link">
              Drivers
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex gap-3 flex-shrink-0">
            <Link to="/login">
              <button className="btn-secondary whitespace-nowrap">
                Account
              </button>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3">
              <a 
                href="#advertisers" 
                className="nav-link block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Advertisers
              </a>
              <a 
                href="#drivers" 
                className="nav-link block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Drivers
              </a>
              <a 
                href="#features" 
                className="nav-link block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
            </div>

            {/* Mobile CTA Button */}
            <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
              <Link to="/login" className="w-full">
                <button className="btn-secondary w-full">
                  Account
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Inner border effect */}
        <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      </nav>
    </div>
  )
}

export default Navigation

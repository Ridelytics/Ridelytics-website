function Navigation() {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1400px] px-4 pt-4">
      <nav className="bg-black rounded-xl shadow-[0px_16px_68px_0px_rgba(47,48,55,0.05),0px_0px_4px_0px_rgba(34,42,53,0.08),0px_0px_0px_1px_rgba(34,42,53,0.04),0px_1px_1px_0px_rgba(0,0,0,0.05),0px_0px_24px_0px_rgba(34,42,53,0.06)] h-[70px] flex items-center justify-between px-8">
        {/* Logo */}
        <div className="font-inter font-medium text-sm text-foreground">
          RideLytics
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <a href="#advertisers" className="nav-link">
            Advertisers
          </a>
          <a href="#drivers" className="nav-link">
            Drivers
          </a>
          <a href="#about" className="nav-link">
            About us
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <button className="btn-secondary">
            Contact us
          </button>
          <button className="btn-secondary">
            Account
          </button>
        </div>

        {/* Inner border effect */}
        <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" />
      </nav>
    </div>
  )
}

export default Navigation

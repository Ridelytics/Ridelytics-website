function Features() {
  const features = [
    {
      title: 'Live Screen Network',
      description: 'Monitor active screens, uptime, and real-time locations.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V2M12 22v-2M20 12h2M4 12H2M17.657 6.343l1.414-1.414M4.929 19.071l1.414-1.414M6.343 6.343L4.929 4.929M19.071 19.071l-1.414-1.414" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Campaign Performance',
      description: 'Track impressions, taps, QR scans, and redemptions.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16l4-8 4 4 4-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Attribution Insights',
      description: 'Measure conversion lift, search uplift, and estimated impact.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Driver & Fleet Analytics',
      description: 'View hours driven, distance covered, and screen health.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="relative px-4 py-16">
      <div className="max-w-[1365px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-5 relative group hover:border-primary/30 transition-all min-w-0"
            >
              {/* Info icon in top right */}
              <div className="absolute top-5 right-5 w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16v-4M12 8h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Icon container */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="relative w-[60px] h-[60px] flex-shrink-0">
                  {/* Outer circle */}
                  <div className="absolute inset-0 rounded-full border border-primary" />
                  
                  {/* Inner circle */}
                  <div className="absolute inset-2 rounded-full border border-primary flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-urbanist font-semibold text-base text-foreground text-center mb-3 break-words">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-urbanist font-medium text-sm text-muted text-center leading-relaxed break-words">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features

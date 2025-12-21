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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card-glass group relative overflow-visible"
              style={{ 
                animationDelay: `${index * 200}ms` 
              }}
            >
              {/* Gradient glow background - centered and balanced */}
              <div 
                className="absolute w-full h-full top-0 left-0 rounded-[10px] blur-[50px] opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 180deg at 50% 50%, rgba(242,98,181,0) 0%, rgba(95,197,255,0.4) 15%, rgba(255,172,137,0.4) 30%, rgba(129,85,255,0.4) 45%, rgba(120,157,255,0.4) 60%, rgba(159,115,241,0.4) 75%, rgba(242,98,181,0) 100%)'
                }}
              />

              {/* Card content */}
              <div className="relative z-10 flex flex-col gap-5">
                {/* Icon container */}
                <div className="inline-flex w-12 h-12">
                  <div 
                    className="flex w-12 h-12 items-center justify-center rounded-full backdrop-blur-[10px] text-white relative"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    {/* Gradient border for icon */}
                    <div 
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        padding: '1px',
                        background: 'linear-gradient(94deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 100%)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                      }}
                    />
                    {feature.icon}
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-inter font-medium text-base text-white leading-6 break-words">
                    {feature.title}
                  </h3>
                  <p className="font-inter font-normal text-sm text-white/70 leading-5 break-words">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features

function Hero() {
  return (
    <div className="relative pt-[100px] sm:pt-[126px] px-4 pb-16 overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-start">
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-[823px] min-w-0">
            <div className="pl-0 sm:pl-8 lg:pl-20 pt-8 sm:pt-16 lg:pt-24">
              {/* Title */}
              <h1 className="section-title mb-6 sm:mb-8">
                RideLytics
              </h1>

              {/* Description */}
              <p className="font-urbanist font-medium text-base leading-6 text-muted max-w-[701px] mb-8 sm:mb-12 lg:mb-16">
                RideLytics helps advertisers measure impressions, engagement, and conversions from mobile digital screens in real time — powered by live location and exposure data.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-20 lg:mb-28">
                <button className="btn-primary w-full sm:w-auto whitespace-nowrap">
                  Create Campaign
                </button>
                <button className="btn-primary w-full sm:w-auto whitespace-nowrap">
                  View Dashboard
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="relative bg-[#1a1a1a] rounded-[10px] h-[99px] w-full">
                  <div className="absolute left-[20px] top-[14px]">
                    <div className="stat-number">
                      250+
                    </div>
                  </div>
                  <div className="absolute left-[20px] top-[61px]">
                    <div className="stat-label">
                      Active Screens
                    </div>
                  </div>
                  <div className="absolute border border-[#262626] border-solid h-[99px] left-0 rounded-[10px] top-0 w-full pointer-events-none" />
                </div>

                {/* Card 2 */}
                <div className="relative bg-[#1a1a1a] rounded-[10px] h-[99px] w-full">
                  <div className="absolute left-[20px] top-[14px]">
                    <div className="stat-number">
                      1.2M+
                    </div>
                  </div>
                  <div className="absolute left-[20px] top-[61px]">
                    <div className="stat-label">
                      Campaign Impressions
                    </div>
                  </div>
                  <div className="absolute border border-[#262626] border-solid h-[99px] left-0 rounded-[10px] top-0 w-full pointer-events-none" />
                </div>

                {/* Card 3 */}
                <div className="relative bg-[#1a1a1a] rounded-[10px] h-[99px] w-full">
                  <div className="absolute left-[20px] top-[14px]">
                    <div className="stat-number">
                      98%
                    </div>
                  </div>
                  <div className="absolute left-[20px] top-[61px]">
                    <div className="stat-label">
                      Advertiser ROI Tracked
                    </div>
                  </div>
                  <div className="absolute border border-[#262626] border-solid h-[99px] left-0 rounded-[10px] top-0 w-full pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Abstract Design */}
          <div className="relative w-full lg:w-[557px] h-[400px] lg:h-[622px] bg-card rounded-lg overflow-hidden flex-shrink-0 hidden lg:block">
            {/* Abstract gradient background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/40 via-gray-700/30 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,200,200,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(160,160,160,0.15),transparent_50%)]" />
            </div>
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#2a2a2a]/90 via-[#191919]/50 to-transparent" />
            
            {/* Decorative circles */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-400/5 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gray-500/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero


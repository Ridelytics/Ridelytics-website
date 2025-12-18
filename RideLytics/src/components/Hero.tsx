function Hero() {
  return (
    <div className="relative pt-[126px] px-4 pb-16 overflow-hidden">
      <div className="max-w-[1435px] mx-auto">
        <div className="flex gap-[60px] items-start">
          {/* Left Content */}
          <div className="flex-1 max-w-[823px] min-w-0">
            <div className="pl-20 pt-24">
              {/* Title */}
              <h1 
                className="font-inter font-semibold text-[72px] leading-[80px] tracking-[-1.8px] bg-clip-text text-transparent mb-8"
                style={{
                  backgroundImage: 'radial-gradient(circle, #FFFFFF 0%, #888787 25%, #FFFFFF 50%, #888787 75%, #3B3B3B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  paddingBottom: '4px',
                }}
              >
                RideLytics
              </h1>

              {/* Description */}
              <p className="font-urbanist font-medium text-base leading-6 text-[#999] max-w-[701px] mb-16">
                RideLytics helps advertisers measure impressions, engagement, and conversions from mobile digital screens in real time — powered by live location and exposure data.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 mb-28">
                <button className="px-5 py-3.5 bg-gradient-to-b from-white/8 to-transparent border border-white/15 rounded-lg shadow-[0px_0px_5px_0px_rgba(255,255,255,0.05),0px_0px_15px_0px_rgba(200,200,200,0.15)] font-urbanist font-medium text-sm text-white hover:from-white/12 hover:shadow-[0px_0px_8px_0px_rgba(255,255,255,0.08),0px_0px_20px_0px_rgba(200,200,200,0.2)] transition-all">
                  Create Campaign
                </button>
                <button className="px-5 py-3.5 bg-gradient-to-b from-white/8 to-transparent border border-white/15 rounded-lg shadow-[0px_0px_5px_0px_rgba(255,255,255,0.05),0px_0px_15px_0px_rgba(200,200,200,0.15)] font-urbanist font-medium text-sm text-white hover:from-white/12 hover:shadow-[0px_0px_8px_0px_rgba(255,255,255,0.08),0px_0px_20px_0px_rgba(200,200,200,0.2)] transition-all">
                  View Dashboard
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-4">
                <div className="bg-[#1a1a1a] border border-[#262626] rounded p-5 flex-1">
                  <div 
                    className="font-urbanist font-bold text-[30px] leading-[45px] bg-clip-text text-transparent mb-1"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #FFFFFF 0%, #888787 25%, #FFFFFF 50%, #888787 75%, #3B3B3B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    250+
                  </div>
                  <div className="font-urbanist font-medium text-base text-[#999]">
                    Active Screens
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border border-[#262626] rounded p-5 flex-1">
                  <div 
                    className="font-urbanist font-bold text-[30px] leading-[45px] bg-clip-text text-transparent mb-1"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #FFFFFF 0%, #888787 25%, #FFFFFF 50%, #888787 75%, #3B3B3B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    1.2M+
                  </div>
                  <div className="font-urbanist font-medium text-base text-[#999]">
                    Campaign Impressions
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border border-[#262626] rounded p-5 flex-1">
                  <div 
                    className="font-urbanist font-bold text-[30px] leading-[45px] bg-clip-text text-transparent mb-1"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #FFFFFF 0%, #888787 25%, #FFFFFF 50%, #888787 75%, #3B3B3B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    98%
                  </div>
                  <div className="font-urbanist font-medium text-base text-[#999]">
                    Advertiser ROI Tracked
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Abstract Design */}
          <div className="relative w-[557px] h-[622px] bg-[#1a1a1a] rounded-lg overflow-hidden flex-shrink-0 hidden lg:block">
            {/* Abstract gradient background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.15),transparent_50%)]" />
            </div>
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#2a213f]/90 via-[#191919]/50 to-transparent" />
            
            {/* Decorative circles */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero


import uberLyftImage from '../assets/Uber Lyft image.avif'

function About() {
  return (
    <div className="about-page">
      {/* OUR JOURNEY SECTION */}
      <div className="container-about mb-8 lg:mb-12">
        <div className="journey-section">
          {/* Left Content */}
          <div className="journey-content">
            <div className="journey-content-inner">
              <h2 className="section-title">
                Our Journey
              </h2>
              <p className="journey-description">
                RideLytics started with a simple mission: connect local businesses with rideshare drivers through in-car digital advertising. We're building a platform where advertisers can measure real impact — impressions, taps, QR scans, and redemptions — while drivers earn fairly and reliably. From our pilot rollout to ongoing partnerships, we're focused on transparency, performance, and scalability.
              </p>

              {/* Stats Cards */}
              <div className="journey-stats-grid">
                {/* Card 1 */}
                <div className="journey-stat-card">
                  <div className="journey-stat-number">
                    <div className="stat-number">5+</div>
                  </div>
                  <div className="journey-stat-label">
                    <div className="stat-label">Pilot Drivers</div>
                  </div>
                  <div className="journey-stat-border" />
                </div>

                {/* Card 2 */}
                <div className="journey-stat-card">
                  <div className="journey-stat-number">
                    <div className="stat-number">10+</div>
                  </div>
                  <div className="journey-stat-label">
                    <div className="stat-label">Active Campaign Concepts</div>
                  </div>
                  <div className="journey-stat-border" />
                </div>

                {/* Card 3 */}
                <div className="journey-stat-card">
                  <div className="journey-stat-number">
                    <div className="stat-number">6+</div>
                  </div>
                  <div className="journey-stat-label">
                    <div className="stat-label">KPIs Tracked</div>
                  </div>
                  <div className="journey-stat-border" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="journey-hero-image">
            <img 
              src={uberLyftImage} 
              alt="RideLytics Platform" 
              className="journey-hero-img"
            />
            <div className="journey-hero-overlay" />
          </div>
        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="values-section">
        <div className="values-content">
          {/* Section Header */}
          <div className="values-header">
            <h2 className="section-title">
              Our Impact
            </h2>
          </div>

          {/* Grid Layout with Varying Sizes - Full Width */}
          <div className="values-grid">
            {/* Card 1 - Stat Card (2 cols) */}
            <div className="value-card-stat value-card-2col">
              <div className="relative z-10 flex flex-col items-center justify-center gap-4 w-full h-full">
                <div className="progress-circle">
                  <svg className="progress-circle-svg" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#262626"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="8"
                      strokeDasharray="339.292"
                      strokeDashoffset="84.823"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#703BF7" />
                        <stop offset="100%" stopColor="#9D6CFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="progress-circle-value">
                    <span className="progress-value-text">95%</span>
                  </div>
                </div>
                <p className="value-label">Driver satisfaction rate</p>
              </div>
            </div>

            {/* Card 2 - Hero Card (2 cols - Gradient) */}
            <div className="value-card-hero value-card-2col">
              <div>
                <p className="value-metric-label">Key Performance Metric</p>
                <h3 className="value-hero-number">100k+</h3>
                <p className="value-hero-description">Monthly impressions delivered</p>
              </div>
              <div className="value-hero-footer">
                <div className="value-hero-badge">
                  <p className="value-hero-badge-text">Real-time tracking across all campaigns</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Feature Card (2 cols) */}
            <div className="value-card-feature value-card-2col">
              <div className="relative z-10">
                <h3 className="value-feature-title">
                  <span className="gradient-text-orange-pink">Ship faster</span>
                  <br />
                  <span className="gradient-text-pink-purple">with data</span>
                </h3>
                <p className="value-feature-subtitle">Real-time insights & analytics</p>
              </div>
            </div>

            {/* Card 4 - Icon Card (3 cols - Wide) */}
            <div className="value-card-icon value-card-3col">
              <div className="relative z-10 flex flex-col items-center justify-center gap-4 w-full h-full">
                <div className="icon-container-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="value-label">Lightning-fast deployment</p>
              </div>
            </div>

            {/* Card 5 - Text Card (3 cols - Wide) */}
            <div className="value-card-text value-card-3col">
              <div className="relative z-10 flex-1">
                <p className="value-category">Core Value</p>
                <h3 className="value-title">Measurable Impact</h3>
                <p className="value-description">Track taps, scans, and redemptions that prove real engagement</p>
              </div>
            </div>

            {/* Card 6 - Stat Card (2 cols) */}
            <div className="value-card-stat value-card-2col">
              <div className="relative z-10 text-center">
                <div className="value-stat-large">24/7</div>
                <p className="value-label mt-2">Platform uptime monitoring</p>
              </div>
            </div>

            {/* Card 7 - Feature Card (2 cols) */}
            <div className="value-card-vertical value-card-2col">
              <div className="relative z-10">
                <div className="icon-container-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="value-feature-heading">Driver-First</h3>
                <p className="value-description">Fair earnings & clear onboarding</p>
              </div>
            </div>

            {/* Card 8 - Text Card (2 cols) */}
            <div className="value-card-text value-card-2col">
              <div className="relative z-10 flex-1">
                <p className="value-category">Business Ready</p>
                <h3 className="value-title">Professional Standards</h3>
                <p className="value-description">Clean creative standards and actionable reporting for confident investment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

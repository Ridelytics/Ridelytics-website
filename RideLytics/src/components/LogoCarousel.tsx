import { AdobeLogo } from './logos/AdobeLogo'
import { SamsungLogo } from './logos/SamsungLogo'
import { NvidiaLogo } from './logos/NvidiaLogo'
import { IntelLogo } from './logos/IntelLogo'
import { GoogleLogo } from './logos/GoogleLogo'
import { YoutubeLogo } from './logos/YoutubeLogo'

function LogoCarousel() {
  // Array of logos to display
  const logos = [
    { id: 'adobe', Component: AdobeLogo },
    { id: 'samsung', Component: SamsungLogo },
    { id: 'nvidia', Component: NvidiaLogo },
    { id: 'intel', Component: IntelLogo },
    { id: 'google', Component: GoogleLogo },
    { id: 'youtube', Component: YoutubeLogo },
  ]

  return (
    <div className="relative px-4 py-16 overflow-hidden bg-background">
      <div className="max-w-[1367px] mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="section-subtitle">
            Advertising Businesses Around the World
          </h2>
        </div>

        {/* Logo carousel container */}
        <div className="relative h-16 overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`${logo.id}-1-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: '170px', height: '64px' }}
              >
                <logo.Component />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`${logo.id}-2-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: '170px', height: '64px' }}
              >
                <logo.Component />
              </div>
            ))}
            {/* Third set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`${logo.id}-3-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: '170px', height: '64px' }}
              >
                <logo.Component />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default LogoCarousel

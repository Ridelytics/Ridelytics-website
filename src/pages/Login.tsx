import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import rideLyticsLogoBlack from '../assets/RideLytics Logo Black.png'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just navigate to homepage
    // TODO: Implement actual login logic with backend
    console.log('Login:', { email, password, rememberMe })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Section - Login Form */}
        <div className="flex-1 flex flex-col justify-between py-8 lg:py-12">
          <div className="space-y-12">
            {/* Heading */}
            <div className="space-y-6">
              <h1 className="font-inter font-normal text-[32px] lg:text-[36px] leading-[1.2] text-white">
                Drive Smarter Decisions.
              </h1>
              <p className="font-inter font-medium text-[16px] lg:text-[18px] leading-[1.55] text-[#9b9c9e] tracking-[0.15px] max-w-[346px]">
                Log in to RideLytics and unlock real time analytics from the road.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-8">
              {/* Email Input */}
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-[18px] top-[16px] w-5 h-5 flex items-center justify-center">
                    <svg className="w-full h-full text-white" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full h-[48px] pl-[52px] pr-4 bg-[#1a1d21] border border-[#363a3d] rounded-[8px] 
                             font-inter font-medium text-[16px] text-white 
                             placeholder:text-[#9b9c9e] tracking-[0.15px]
                             focus:border-[#cdcecf] focus:shadow-[0px_0px_0px_4px_rgba(132,220,245,0.24)] focus:outline-none
                             transition-all duration-200"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <div className="absolute left-[20px] top-[15px] w-[15.5px] h-[17.5px] flex items-center justify-center">
                    <svg className="w-full h-full text-white" viewBox="0 0 16 18" fill="none">
                      <rect x="1" y="8" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M4 8V5a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full h-[48px] pl-[52px] pr-4 bg-[#1a1d21] border border-[#363a3d] rounded-[8px] 
                             font-inter font-medium text-[16px] text-white 
                             placeholder:text-[#9b9c9e] tracking-[0.15px]
                             focus:border-[#cdcecf] focus:shadow-[0px_0px_0px_4px_rgba(132,220,245,0.24)] focus:outline-none
                             transition-all duration-200"
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-4 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div 
                      className="w-[24px] h-[24px] bg-[#1a1d21] border border-[#363a3d] rounded-[4px] peer-checked:border-transparent peer-checked:bg-[#888787] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.05),0px_1px_3px_0px_rgba(0,0,0,0.05)] transition-all duration-200 flex items-center justify-center"
                    >
                      {rememberMe && (
                        <svg className="w-4 h-4 text-black" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="font-inter font-medium text-[16px] text-[#cdcecf] tracking-[0.15px]">
                    Remember me
                  </span>
                </label>
                <a 
                  href="#forgot" 
                  className="font-inter font-semibold text-[16px] tracking-[0.15px] bg-gradient-to-r from-[#bab7b7] to-[#383838] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-[48px] bg-gradient-to-r from-[#bab7b7] to-[#383838] rounded-[12px]
                         font-inter font-semibold text-[16px] text-black tracking-[0.15px]
                         hover:opacity-90 transition-opacity duration-200"
              >
                Log in
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#363a3d] to-transparent" />
                <span className="font-inter font-medium text-[12px] text-[#686b6e] tracking-[0.15px]">
                  or continue with
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#363a3d] to-transparent" />
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="h-[48px] bg-[#1a1d21] rounded-[12px] flex items-center justify-center gap-3
                           hover:bg-[#252a30] transition-colors duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d="M19.99 10.187c0-.82-.069-1.417-.216-2.037H10.2v3.698h5.62c-.113.92-.725 2.303-2.084 3.233l-.02.124 3.028 2.292.21.02c1.926-1.738 3.037-4.296 3.037-7.33z" fill="#4285F4"/>
                    <path d="M10.2 20c2.795 0 5.136-.908 6.848-2.483l-3.218-2.436c-.862.587-2.017 1.003-3.63 1.003-2.757 0-5.092-1.738-5.93-4.14l-.122.01-3.148 2.38-.04.112C2.863 17.597 6.27 20 10.2 20z" fill="#34A853"/>
                    <path d="M4.27 11.944c-.22-.638-.344-1.32-.344-2.027 0-.707.125-1.389.333-2.027l-.006-.132L1.09 5.314l-.106.05A9.787 9.787 0 000 10.083c0 1.588.39 3.09 1.08 4.42l3.19-2.56z" fill="#FBBC05"/>
                    <path d="M10.2 3.853c1.914 0 3.206.809 3.943 1.484l2.845-2.717C15.322 1.08 12.984 0 10.2 0 6.27 0 2.863 2.403.984 5.554L4.26 7.935c.849-2.404 3.184-4.082 5.94-4.082z" fill="#EB4335"/>
                  </svg>
                  <span className="font-inter font-semibold text-[16px] text-[#686b6e] tracking-[0.15px]">
                    Google Account
                  </span>
                </button>
                <button
                  type="button"
                  className="h-[48px] bg-[#1a1d21] rounded-[12px] flex items-center justify-center gap-3
                           hover:bg-[#252a30] transition-colors duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 24" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="font-inter font-semibold text-[16px] text-[#686b6e] tracking-[0.15px]">
                    Apple Account
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Sign Up Link */}
          <div className="flex items-center gap-2 mt-8">
            <span className="font-inter font-semibold text-[16px] text-[#686b6e] tracking-[0.15px]">
              Don't have an account?
            </span>
            <a 
              href="#signup" 
              className="font-inter font-semibold text-[16px] tracking-[0.15px] bg-gradient-to-r from-[#bab7b7] to-[#383838] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Right Section - Logo Image */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <img 
            src={rideLyticsLogoBlack} 
            alt="RideLytics Logo" 
            className="w-full max-w-[350px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Login


import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleSingpass = () => {
    navigate('/singpass')
  }

  const handleNRIC = () => {
    navigate('/login-nric')
  }

  const handleCreateAccount = () => {
    navigate('/create-account')
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col font-[Noto_Sans]"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,94,184,0.07) 0%, rgba(92,85,235,0.07) 73%), #ffffff'
      }}
    >
      {/* Main content area */}
      <div className="flex-1 flex flex-col md:flex-row">

        {/* Left side — login form */}
        <div
          className="flex-1 flex flex-col items-center justify-center py-[24px] px-[16px] md:py-[48px] md:px-[24px]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,94,184,0.07) 0%, rgba(92,85,235,0.07) 73%), #ffffff'
          }}
        >
          {/* Card */}
          <div
            className="w-full max-w-[420px] flex flex-col items-center gap-[32px] p-[32px] rounded-[24px]"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.56) 0%, rgba(255,255,255,0.08) 100%), rgba(255,255,255,0.70)',
              boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.05)'
            }}
          >
            {/* Logo + heading + subtitle */}
            <div className="flex flex-col items-center gap-[12px] w-full">
              <img
                src="__IMG_1__"
                alt="UOI Logo"
                className="w-[100px] h-[50px] object-contain"
              />
              <p
                className="text-[28px] md:text-[32px] font-bold leading-[1.2] text-center text-[#212121]"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Welcome to UOI Customer Portal
              </p>
              <p
                className="text-[14px] md:text-[16px] leading-[1.5] text-center text-[#212121]"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Manage all your policies in one portal.
              </p>
            </div>

            {/* Buttons section */}
            <div className="flex flex-col items-center gap-[24px] w-full">
              {/* Singpass button image */}
              <img
                src="__IMG_2__"
                alt="Log in with Singpass"
                className="w-[200px] h-[42px] object-contain cursor-pointer"
                onClick={handleSingpass}
              />

              {/* OR divider */}
              <div className="flex flex-row items-center justify-center gap-[16px] w-full">
                <div className="flex-1 h-px bg-[#212121] opacity-20" />
                <span
                  className="text-[14px] md:text-[16px] leading-[1.5] text-center text-[#212121]"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  or
                </span>
                <div className="flex-1 h-px bg-[#212121] opacity-20" />
              </div>

              {/* NRIC/FIN button */}
              <button
                onClick={handleNRIC}
                className="flex flex-row items-center justify-center gap-[10px] w-[200px] h-[42px] md:h-[48px] bg-[#ffffff] rounded-[8px] border border-[#005eb8] cursor-pointer hover:opacity-90 transition-opacity"
                style={{ boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.05)' }}
              >
                <span
                  className="text-[16px] font-medium leading-[24px] text-[#005eb8]"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  Log in with NRIC/FIN
                </span>
              </button>
            </div>
          </div>

          {/* Helper text below card */}
          <div className="flex flex-col gap-[12px] mt-[24px] w-full max-w-[420px]">
            <p
              className="text-[14px] leading-[21px] text-center text-[#6e6e6e]"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Don&#39;t have an account?{' '}
              <span
                className="text-[#005eb8] underline cursor-pointer"
                onClick={handleCreateAccount}
              >
                Create an account
              </span>
            </p>
            <p
              className="text-[14px] leading-[21px] text-center text-[#6e6e6e]"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              If you&#39;re experiencing login issues, please contact us at{' '}
              <a
                href="mailto:help@uoi.com.sg"
                className="text-[#005eb8] underline"
              >
                help@uoi.com.sg
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right side — lifestyle photo (desktop only) */}
        <div className="hidden md:block md:flex-1 relative">
          <img
            src="__IMG_5__"
            alt="Travel lifestyle"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Footer — desktop only */}
      <div className="hidden md:flex flex-row items-center justify-between px-[24px] py-[16px] bg-[#005eb8] w-full">
        <span
          className="text-[14px] leading-[21px] text-[#ffffff]"
          style={{ fontFamily: 'Noto Sans, sans-serif' }}
        >
          Copyright &copy; 2026 United Overseas Insurance Limited Co. Reg. No. 197100152R.
        </span>
        <span
          className="text-[14px] leading-[21px] text-right text-[#ffffff]"
          style={{ fontFamily: 'Noto Sans, sans-serif' }}
        >
          All Rights Reserved.
        </span>
      </div>
    </div>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/singpass" element={
          <div className="min-h-screen flex items-center justify-center font-[Noto_Sans] bg-[#DDEAF5]">
            <p className="text-[20px] text-[#6e6e6e]">Singpass Authentication — coming soon</p>
          </div>
        } />
        <Route path="/login-nric" element={
          <div className="min-h-screen flex items-center justify-center font-[Noto_Sans] bg-[#DDEAF5]">
            <p className="text-[20px] text-[#6e6e6e]">NRIC/FIN Login — coming soon</p>
          </div>
        } />
        <Route path="/create-account" element={
          <div className="min-h-screen flex items-center justify-center font-[Noto_Sans] bg-[#DDEAF5]">
            <p className="text-[20px] text-[#6e6e6e]">Create Account — coming soon</p>
          </div>
        } />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center font-[Noto_Sans] bg-[#DDEAF5]">
            <p className="text-[20px] text-[#6e6e6e]">Page not found</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

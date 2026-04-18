import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { COMPLIANCE_LOGO_URL, C, complianceBenefitsTo } from '../../compliance/constants'
import { getSiteOrigin } from '../../site'

function ComplianceNav() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const benefitsActive = pathname === '/compliance' && hash === '#benefits'
  const link = ({ isActive }) =>
    `text-sm font-bold uppercase tracking-widest transition-colors ${
      isActive ? 'text-emerald-400' : 'text-zinc-400 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 py-4 px-6 border-b border-white/5 bg-[#0a1a14]/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <Link to={C.home} className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={COMPLIANCE_LOGO_URL} alt="Medigard Logo" className="h-10 w-auto object-contain" />
        </Link>
        <button
          type="button"
          className="lg:hidden px-4 py-2 rounded-lg border border-white/10 text-zinc-300 text-xs font-black uppercase tracking-widest"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>
        <nav
          className={`${
            open ? 'flex' : 'hidden'
          } lg:flex w-full lg:w-auto flex-col lg:flex-row lg:items-center gap-6 lg:gap-8`}
        >
          <NavLink to={C.home} className={link} onClick={() => setOpen(false)} end>
            Home
          </NavLink>
          <Link
            to={complianceBenefitsTo}
            onClick={() => setOpen(false)}
            className={link({ isActive: benefitsActive })}
          >
            Services
          </Link>
          <NavLink to={C.contact} className={link} onClick={() => setOpen(false)}>
            Contact Us
          </NavLink>
          <Link
            to={C.book}
            onClick={() => setOpen(false)}
            className="inline-block text-center px-6 py-2.5 bg-emerald-400 text-[#0a1a14] font-black rounded-lg hover:bg-emerald-300 transition-all text-sm uppercase tracking-widest"
          >
            Schedule Call
          </Link>
        </nav>
      </div>
    </header>
  )
}

function ComplianceFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-16 border-t border-white/5 bg-[#0a1a14] mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <img src={COMPLIANCE_LOGO_URL} alt="Medigard Logo" className="h-12 w-auto object-contain" />
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-8">
          <Link to={C.privacy} className="hover:text-emerald-400 transition-colors">
            Privacy Policy
          </Link>
          <Link to={C.terms} className="hover:text-emerald-400 transition-colors">
            Terms of Service
          </Link>
          <Link to={complianceBenefitsTo} className="hover:text-emerald-400 transition-colors">
            Services
          </Link>
          <Link to={C.contact} className="hover:text-emerald-400 transition-colors">
            Contact Us
          </Link>
        </div>
        <p className="text-zinc-500 text-sm mb-6 font-medium">
          © {year} Medigard Compliance Systems LLC. All rights reserved.
        </p>
        <p className="text-xs text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-6">
          Medigard Compliance Systems LLC, doing business as Medigard, operates this compliance funnel and the
          services described herein. References to &quot;Medigard&quot; refer to Medigard Compliance Systems LLC.
        </p>
        <p className="text-[10px] text-zinc-600 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
          Medigard is an independent compliance automation provider. We are not affiliated with CMS or any
          government agency. Our system is designed to assist with compliance monitoring but does not guarantee
          legal immunity.
        </p>
      </div>
    </footer>
  )
}

export default function ComplianceLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const origin = getSiteOrigin()
    if (!origin) return
    const href = `${origin}${pathname}`
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', href)
  }, [pathname])

  return (
    <div className="min-h-screen bg-[#0a1a14] text-white font-sans flex flex-col">
      <ComplianceNav />
      <Outlet />
      <ComplianceFooter />
    </div>
  )
}

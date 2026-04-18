import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MedigardLogo from './MedigardLogo'

const linkClass = ({ isActive }) =>
  `text-sm font-bold uppercase tracking-widest transition-colors ${
    isActive ? 'text-[#3b82f6]' : 'text-slate-500 hover:text-[#1e293b]'
  }`

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 py-4 px-6 md:px-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 bg-white shadow-sm">
      <div className="relative z-10 shrink-0">
        <MedigardLogo />
      </div>
      <button
        type="button"
        className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="site-nav-links"
      >
        Menu
      </button>
      <nav
        id="site-nav-links"
        className={`${open ? 'flex' : 'hidden'} md:flex w-full md:w-auto flex-col md:flex-row md:items-center gap-6 md:gap-8`}
      >
        <NavLink to="/" className={linkClass} onClick={() => setOpen(false)} end>
          Home
        </NavLink>
        <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
          Contact Us
        </NavLink>
        <NavLink
          to="/book"
          className="inline-block text-center px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest bg-[#3b82f6] text-white hover:bg-blue-700 shadow-lg shadow-blue-500/15 transition-colors"
          onClick={() => setOpen(false)}
        >
          Book Walkthrough
        </NavLink>
      </nav>
    </header>
  )
}

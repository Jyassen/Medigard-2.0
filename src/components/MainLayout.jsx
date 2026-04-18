import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteFooter from './SiteFooter'
import { getSiteOrigin } from '../site'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const origin = getSiteOrigin()
    if (!origin) return
    const href = `${origin}${pathname === '/' ? '' : pathname}`
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', href)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-slate-900 flex flex-col">
      <Outlet />
      <SiteFooter />
    </div>
  )
}

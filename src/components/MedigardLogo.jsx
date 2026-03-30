import { Link } from 'react-router-dom'
import { LOGO_LIGHT } from '../constants/media'

export default function MedigardLogo({ size = 'md', to = '/' }) {
  const imgClass = size === 'sm' ? 'h-10 w-auto' : 'h-14 w-auto'

  return (
    <Link
      to={to}
      aria-label="Medigard home"
      className="inline-flex items-center no-underline hover:opacity-90 transition-opacity"
    >
      <img src={LOGO_LIGHT} alt="" className={imgClass} decoding="async" />
    </Link>
  )
}

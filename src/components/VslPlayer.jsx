import { VSL_VIDEO } from '../constants/media'

export default function VslPlayer({ kicker, title, className = '' }) {
  return (
    <div className={`rounded-[2.5rem] shadow-2xl border-8 border-white overflow-hidden bg-slate-900 ${className}`}>
      <video
        className="w-full aspect-video bg-black object-contain"
        src={VSL_VIDEO}
        controls
        playsInline
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
      {(kicker || title) && (
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 text-left">
          {kicker && (
            <p className="text-white/60 text-xs font-black uppercase tracking-[0.2em] mb-1">{kicker}</p>
          )}
          {title && <h3 className="text-white text-xl md:text-2xl font-black">{title}</h3>}
        </div>
      )}
    </div>
  )
}

import { useEffect } from 'react'
import { VSL_VIDEO } from '../constants/media'

function WistiaEmbed({ mediaId, aspect = '1.7777777777777777' }) {
  useEffect(() => {
    const playerScript = document.createElement('script')
    playerScript.src = 'https://fast.wistia.com/player.js'
    playerScript.async = true
    document.head.appendChild(playerScript)

    const embedScript = document.createElement('script')
    embedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`
    embedScript.async = true
    embedScript.type = 'module'
    document.head.appendChild(embedScript)

    const style = document.createElement('style')
    const paddingTop = `${(1 / parseFloat(aspect)) * 100}%`
    style.textContent = `wistia-player[media-id='${mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); display: block; filter: blur(5px); padding-top:${paddingTop}; }`
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(playerScript)
      document.head.removeChild(embedScript)
      document.head.removeChild(style)
    }
  }, [mediaId, aspect])

  return (
    <wistia-player
      media-id={mediaId}
      aspect={aspect}
      style={{ display: 'block', width: '100%' }}
    />
  )
}

export default function VslPlayer({ kicker, title, className = '', src, wistiaId, wistiaAspect }) {
  return (
    <div className={`rounded-[2.5rem] shadow-2xl border-8 border-white overflow-hidden bg-slate-900 ${className}`}>
      {wistiaId ? (
        <WistiaEmbed mediaId={wistiaId} aspect={wistiaAspect} />
      ) : (
        <video
          className="w-full aspect-video bg-black object-contain"
          src={src || VSL_VIDEO}
          controls
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      )}
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

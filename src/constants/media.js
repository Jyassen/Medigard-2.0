export const LOGO_LIGHT = '/assets/logo-light.png'

const envVsl =
  typeof import.meta.env.VITE_VSL_VIDEO_URL === 'string'
    ? import.meta.env.VITE_VSL_VIDEO_URL.trim()
    : ''

export const VSL_VIDEO = envVsl || '/assets/medigard-vsl.mp4'

export const PRE_VSL_VIDEO = '/assets/PreVSL FINAL_1080p.mp4'

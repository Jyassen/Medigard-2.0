export const LOGO_LIGHT = '/assets/logo-light.png'

const envVsl =
  typeof import.meta.env.VITE_VSL_VIDEO_URL === 'string'
    ? import.meta.env.VITE_VSL_VIDEO_URL.trim()
    : ''

export const VSL_VIDEO = envVsl || '/assets/medigard-vsl.mp4'

export const LOGO_LIGHT = "/assets/logo-light.png";
export const LOGO_VARIATION = "/assets/logo-variation.png";

const envVsl =
  typeof import.meta.env.VITE_VSL_VIDEO_URL === "string"
    ? import.meta.env.VITE_VSL_VIDEO_URL.trim()
    : "";

export const VSL_VIDEO = envVsl || "/assets/medigard-vsl.mp4";

const envGrowthWistiaId =
  typeof import.meta.env.VITE_GROWTH_VSL_WISTIA_ID === "string"
    ? import.meta.env.VITE_GROWTH_VSL_WISTIA_ID.trim()
    : "";

const envPreCallWistiaId =
  typeof import.meta.env.VITE_PRE_CALL_VSL_WISTIA_ID === "string"
    ? import.meta.env.VITE_PRE_CALL_VSL_WISTIA_ID.trim()
    : "";

/** Wistia media ID for Growth VSL (16:9). Override with VITE_GROWTH_VSL_WISTIA_ID. */
export const GROWTH_VSL_WISTIA_ID = envGrowthWistiaId || "q98yag2x29";

/** 16:9 — matches the Growth VSL master (1920×1080). */
export const GROWTH_VSL_ASPECT = "1.7777777777777777";

export const PRE_VSL_VIDEO = "/assets/PreVSL FINAL_1080p.mp4";

/** Wistia media ID for the pre-call briefing. Override with VITE_PRE_CALL_VSL_WISTIA_ID. */
export const PRE_CALL_VSL_WISTIA_ID = envPreCallWistiaId || "v5168u6w4o";

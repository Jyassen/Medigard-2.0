import { useEffect } from "react";
import { getFunnelSource } from "../constants/funnels";

export function useFunnelTracking(pathname) {
  useEffect(() => {
    if (typeof window.fbq !== "function") return;
    window.fbq("trackCustom", "FunnelView", {
      source: getFunnelSource(pathname),
      path: pathname,
    });
  }, [pathname]);
}

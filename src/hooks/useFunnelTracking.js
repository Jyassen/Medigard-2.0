import { useEffect } from "react";
import { getFunnelSource, rememberFunnel } from "../constants/funnels";

export function useFunnelTracking(pathname) {
  useEffect(() => {
    rememberFunnel(pathname);
    if (typeof window.fbq !== "function") return;
    window.fbq("trackCustom", "FunnelView", {
      source: getFunnelSource(pathname),
      path: pathname,
    });
  }, [pathname]);
}

import { createContext, useContext } from "react";
import { offerPaths } from "../../offer/constants";

export const OfferFunnelContext = createContext(offerPaths("v1"));

export function useOfferPaths() {
  return useContext(OfferFunnelContext);
}

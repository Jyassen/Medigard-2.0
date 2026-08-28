import { ROUTES } from "../constants/routes";

export function offerVariantFromPath(pathname = "") {
  const match = pathname.match(/^\/offer\/(v[234])(?:\/|$)/);
  return match ? match[1] : "v1";
}

export function offerPaths(variant = "v1") {
  const home = variant === "v1" ? ROUTES.offer : `/offer/${variant}`;
  return {
    variant,
    home,
    book: variant === "v1" ? ROUTES.offerBook : `${home}#book`,
    thanks: `${home}/thank-you`,
    contact: `${home}/contact`,
    privacy: `${home}/privacy`,
    terms: `${home}/terms`,
    howTo: { pathname: home, hash: "#how-it-works" },
  };
}

export const O = offerPaths("v1");
export const offerHowTo = O.howTo;

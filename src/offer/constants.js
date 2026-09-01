import { ROUTES } from "../constants/routes";

const SITE_V2_PATHS = new Set([
  ROUTES.home,
  ROUTES.book,
  ROUTES.privacy,
  ROUTES.terms,
  ROUTES.contact,
]);

export function offerVariantFromPath(pathname = "") {
  if (SITE_V2_PATHS.has(pathname)) return "v2";
  const match = pathname.match(/^\/offer\/(v[234])(?:\/|$)/);
  return match ? match[1] : "v1";
}

export function offerPaths(variant = "v1") {
  if (variant === "v2") {
    return {
      variant,
      home: ROUTES.home,
      book: `${ROUTES.home}#book`,
      thanks: ROUTES.offerV2ThankYou,
      contact: ROUTES.contact,
      privacy: ROUTES.privacy,
      terms: ROUTES.terms,
      howTo: { pathname: ROUTES.home, hash: "#how-it-works" },
    };
  }

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

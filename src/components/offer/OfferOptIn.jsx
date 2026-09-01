import { useEffect } from "react";
import { OFFER_V2 } from "../../offer/copyV2";

const GHL_FORM_EMBED_SRC = "https://link.msgsndr.com/js/form_embed.js";
export const OFFER_OPTIN_FORM_ID = "Wwb6Zz1dHUZZ5V5ugbc9";
export const OFFER_OPTIN_FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${OFFER_OPTIN_FORM_ID}`;

export default function OfferOptIn() {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_FORM_EMBED_SRC}"]`)) {
      return undefined;
    }
    const script = document.createElement("script");
    script.src = GHL_FORM_EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);
    return undefined;
  }, []);

  return (
    <section className="section container" id="opt-in">
      <div className="section-kicker">{OFFER_V2.optIn.kicker}</div>
      <h2>
        {OFFER_V2.optIn.heading} <span>{OFFER_V2.optIn.headingAccent}</span>
      </h2>
      <p className="lead">{OFFER_V2.optIn.subhead}</p>
      <div className="optin-frame">
        <iframe
          src={OFFER_OPTIN_FORM_SRC}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "4px",
          }}
          id={`inline-${OFFER_OPTIN_FORM_ID}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Opt-in Form | A2P Approved"
          data-height="643"
          data-layout-iframe-id={`inline-${OFFER_OPTIN_FORM_ID}`}
          data-form-id={OFFER_OPTIN_FORM_ID}
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Opt-in Form | A2P Approved"
        />
      </div>
    </section>
  );
}

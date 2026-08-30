import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  isGhlBookingCompleteMessage,
  isGhlBookingOrigin,
} from "../constants/funnels";

const GHL_FORM_EMBED_SRC = "https://link.msgsndr.com/js/form_embed.js";

export default function BookingWidget({
  src,
  title,
  className = "",
  thankYouTo,
}) {
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!thankYouTo) return undefined;

    function onMessage(event) {
      if (event.origin && !isGhlBookingOrigin(event.origin)) return;
      if (!isGhlBookingCompleteMessage(event.data)) return;
      navigate(thankYouTo);
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate, thankYouTo]);

  return (
    <div className={`overflow-hidden rounded-3xl bg-white ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="payment"
        scrolling="no"
        className="block !h-[700px] w-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ overflow: "hidden" }}
      />
    </div>
  );
}

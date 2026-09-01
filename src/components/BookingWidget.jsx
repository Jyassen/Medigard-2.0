import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  isGhlBookingCompleteMessage,
  isGhlBookingOrigin,
} from "../constants/funnels";

const GHL_FORM_EMBED_SRC = "https://link.msgsndr.com/js/form_embed.js";

function bookingFrameId(src) {
  try {
    const parts = new URL(src).pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] || "ghl-booking-frame";
  } catch {
    return "ghl-booking-frame";
  }
}

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
    <div className={`ghl-booking relative w-full bg-white ${className}`}>
      <iframe
        src={src}
        id={bookingFrameId(src)}
        title={title}
        allow="payment"
        className="block w-full border-0"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ minHeight: "700px", width: "100%", border: "none" }}
      />
    </div>
  );
}

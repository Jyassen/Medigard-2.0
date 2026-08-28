import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  isGhlBookingCompleteMessage,
  isGhlBookingOrigin,
} from "../constants/funnels";

export default function BookingWidget({
  src,
  title,
  className = "",
  thankYouTo,
}) {
  const navigate = useNavigate();

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
        className="block min-h-[1100px] w-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

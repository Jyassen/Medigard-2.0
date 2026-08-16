export default function BookingWidget({ src, title, className = "" }) {
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

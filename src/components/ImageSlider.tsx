import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type SliderImage = { src: string; alt: string };

export function ImageSlider({
  images,
  label,
  className,
  interval = 5000,
  children,
}: {
  images: SliderImage[];
  label: string;
  className?: string;
  interval?: number;
  children?: ReactNode;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const t = window.setInterval(() => {
      setActive((c) => (c + 1) % images.length);
    }, interval);
    return () => window.clearInterval(t);
  }, [images.length, interval, paused]);

  if (images.length === 0) return null;

  const goTo = (i: number) => setActive((i + images.length) % images.length);

  return (
    <section
      className={`relative overflow-hidden ${className ?? ""}`}
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {children}

      <button
        onClick={() => goTo(active - 1)}
        aria-label="Previous"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-navy/70 p-2 text-navy-foreground hover:bg-navy"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => goTo(active + 1)}
        aria-label="Next"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-navy/70 p-2 text-navy-foreground hover:bg-navy"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full ${
              index === active ? "w-8 bg-orange" : "w-2.5 bg-navy-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type SliderImage = {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

type ImageSliderProps = {
  images: SliderImage[];
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
  label: string;
  interval?: number;
};

export function ImageSlider({
  images,
  className,
  imageClassName,
  children,
  label,
  interval = 5000,
}: ImageSliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [images.length, interval, paused]);

  if (images.length === 0) return null;

  const goTo = (index: number) => {
    setActive((index + images.length) % images.length);
  };

  const getSlidePosition = (index: number) => {
    if (index === active) return "slider-3d-active";
    const previous = (active - 1 + images.length) % images.length;
    return index === previous ? "slider-3d-exit-left" : "slider-3d-exit-right";
  };

  return (
    <section
      className={cn("group relative isolate overflow-hidden slider-3d-frame", className)}
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="slider-3d-stage absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={1600}
            height={900}
            loading={index === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover slider-3d-slide motion-reduce:transform-none motion-reduce:transition-none",
              getSlidePosition(index),
              imageClassName,
            )}
            aria-hidden={index !== active}
          />
        ))}
      </div>

      {children}

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => goTo(active - 1)}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 border-navy-foreground/35 bg-navy/70 text-navy-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-110 hover:bg-navy hover:text-navy-foreground md:left-6"
      >
        <ChevronLeft />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => goTo(active + 1)}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 border-navy-foreground/35 bg-navy/70 text-navy-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-110 hover:bg-navy hover:text-navy-foreground md:right-6"
      >
        <ChevronRight />
      </Button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Choose image">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Show image ${index + 1}`}
            onClick={() => goTo(index)}
            className={cn(
              "h-2.5 rounded-full border border-navy-foreground transition-all motion-reduce:transition-none",
              index === active ? "w-8 bg-orange" : "w-2.5 bg-navy-foreground/50 hover:bg-navy-foreground",
            )}
          />
        ))}
      </div>
    </section>
  );
}
import { useState, useRef, useEffect, MouseEvent, TouchEvent, KeyboardEvent } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatioClassName?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  aspectRatioClassName = "aspect-symmetrical",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: globalThis.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onTouchStart = () => {
    setIsDragging(true);
  };

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none group cursor-ew-resize border border-brand-border h-[400px] sm:h-[500px] md:h-[650px] bg-brand-border/40`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Before and After treatment dental result slider. Use left and right arrows or drag to slide."
      id="before-after-slider-container"
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After result of smile design"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover"
        id="after-image"
      />

      {/* After Label */}
      <span
        className="absolute top-4 right-4 bg-brand-charcoal/70 text-[10px] tracking-widest text-[#faf7f2] px-3 py-1 font-mono uppercase z-10"
        id="slider-after-label"
      >
        {afterLabel}
      </span>

      {/* Before Image (Clip) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
        id="before-image-clip"
      >
        <img
          src={beforeImage}
          alt="Before aesthetic smile design treatment"
          referrerPolicy="no-referrer"
          className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
          id="before-image"
        />
        {/* Before Label */}
        <span
          className="absolute top-4 left-4 bg-brand-accent/95 text-[10px] tracking-widest text-brand-cream px-3 py-1 font-mono uppercase z-10"
          id="slider-before-label"
        >
          {beforeLabel}
        </span>
      </div>

      {/* Slider Bar */}
      <div
        className="absolute inset-y-0 w-[1px] bg-white pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
        id="slider-separator-bar"
      >
        {/* Slider Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-white bg-brand-charcoal text-[#faf7f2] flex items-center justify-center text-xs shadow-xl pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-105 transition-transform"
          id="slider-divider-handle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18-6-6 6-6" />
            <path d="m15 6 6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

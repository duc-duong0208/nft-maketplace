// src/components/sections/FeaturedSections.tsx
import { useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

export default function FeaturedSections() {
 const containerRef = useRef<HTMLDivElement>(null);
  const cardWidthRef = useRef<number>(0);

  const initializeCardWidth = useCallback(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector("[data-card]") as HTMLElement;
      if (firstCard) {
        // Lấy chiều rộng của 1 card, không phải container
        const cardWidth = firstCard.offsetWidth;
        cardWidthRef.current = cardWidth;
      }
    }
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container || cardWidthRef.current === 0) return;

    const gap = 16;
    const distance = cardWidthRef.current + gap;
    const target = container.scrollLeft + (direction === "left" ? -distance : distance);

    let start: number | null = null;
    const duration = 300;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / duration;

      if (progress < 1) {
        const easeProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
        container.scrollLeft = container.scrollLeft + (target - container.scrollLeft) * easeProgress;
        requestAnimationFrame(animate);
      } else {
        container.scrollLeft = target;
      }
    };

    requestAnimationFrame(animate);
  }, [cardWidthRef.current]);

  const mockDrops = [
    { src: "/nfts/nft3.png", alt: "NFT Drops1" },
    { src: "/nfts/nft3.png", alt: "NFT Drops2" },
    { src: "/nfts/nft3.png", alt: "NFT Drops3" },
  ];

  return (
    <section className="py-16 bg-black max-w-6xl px-5 mx-auto">
      <div className="flex max-lg:flex-col gap-6">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <SectionTitle>NFT DROPS CALENDAR</SectionTitle>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 border rounded-xl flex items-center justify-center bg-[#383A42] cursor-pointer hover:bg-[#4a4d57] transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 border rounded-xl flex items-center justify-center bg-[#383A42] cursor-pointer hover:bg-[#4a4d57] transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide flex gap-4 h-[170px] lg:h-[240px]"
            style={{ scrollBehavior: "auto" }}
          >
            {mockDrops.map((drop, index) => (
              <div
                key={index}
                data-card
                className="flex-shrink-0 w-full h-full rounded-xl overflow-hidden"
              >
                <img
                  src={drop.src}
                  alt={drop.alt}
                  className="w-full h-full object-fill"
                  onLoad={index === 0 ? initializeCardWidth : undefined}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <SectionTitle>HOT NFT</SectionTitle>
            <div className="h-[170px] lg:h-[240px] mt-4 cursor-pointer rounded-xl overflow-hidden">
              <img
                src="/nfts/hot-nft.png"
                alt="Hot NFT"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
          <div>
            <SectionTitle>PROMOTION</SectionTitle>
            <div className="h-[170px] lg:h-[240px] mt-4 cursor-pointer rounded-xl overflow-hidden">
              <img
                src="/nfts/promotion.png"
                alt="Promotion"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

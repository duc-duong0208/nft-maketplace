// src/components/sections/Hero.tsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroBanner from "@/assets/hero-banner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
  { id: 1, src: HeroBanner, title: "Hero Banner 1" },
  { id: 2, src: HeroBanner, title: "Hero Banner 2" },
  { id: 3, src: HeroBanner, title: "Hero Banner 3" },
  { id: 4, src: HeroBanner, title: "Hero Banner 4" },
  { id: 5, src: HeroBanner, title: "Hero Banner 5" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        loop
        className="w-full"
      >
        {heroSlides.map((image) => (
          <SwiperSlide key={image.id}>
              <img
                src={HeroBanner}
                alt={`Hero Banner ${image.id}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />

          </SwiperSlide>
        ))}
      <div className="custom-pagination absolute bottom-6 flex justify-center gap-2 z-10"></div>
      </Swiper>
    </section>
  );
}

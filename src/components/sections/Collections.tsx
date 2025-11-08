import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NFTCard from "@/components/common/NFTCard";
import { NFT } from "@/types";
import SectionTitle from "../common/SectionTitle";

const mockNFTs: NFT[] = [
  {
    id: "1",
    image: "/nfts/nft1.png",
  },
  {
    id: "2",
    image: "/nfts/nft2.png",
  },
  {
    id: "3",
    image: "/nfts/nft1.png",
  },
  {
    id: "4",
    image: "/nfts/nft2.png",
  },
  {
    id: "5",
    image: "/nfts/nft1.png",
  },
  {
    id: "6",
    image: "/nfts/nft2.png",
  },
  {
    id: "7",
    image: "/nfts/nft1.png",
  },
  {
    id: "8",
    image: "/nfts/nft2.png",
  },
  {
    id: "9",
    image: "/nfts/nft1.png",
  },
  {
    id: "10",
    image: "/nfts/nft2.png",
  },
  {
    id: "11",
    image: "/nfts/nft2.png",
  },
  {
    id: "12",
    image: "/nfts/nft1.png",
  },
  {
    id: "13",
    image: "/nfts/nft2.png",
  },
];

export default function Collections() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.querySelector(".snap-center") as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 16;
    const scrollAmount = (cardWidth + gap) * 2;

    const left = direction === "left" ? -scrollAmount : scrollAmount;

    container.scrollBy({
      left,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <SectionTitle>NEW NFT COLLECTIONS</SectionTitle>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border rounded-xl flex items-center justify-center bg-[#383A42] cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border rounded-xl flex items-center justify-center bg-[#383A42] cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Scrollable Grid */}
        <div
          id="nft-scroll-container"
          ref={containerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory scroll-smooth"
        >
          {mockNFTs.map((nft) => (
            <div
              key={nft.id}
              className="flex-shrink-0 w-[102px] h-[140px] sm:w-48 sm:h-64 snap-center"
            >
              <NFTCard nft={nft} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/common/NFTCard.tsx

import { NFT } from "@/types";

interface NFTCardProps {
  nft: NFT;
}

export default function NFTCard({ nft }: NFTCardProps) {
  return (
    <div className="relative w-full h-full aspect-[102/140] sm:aspect-[180/245] overflow-hidden">
      <img
        src={nft.image}
        alt={nft.id}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

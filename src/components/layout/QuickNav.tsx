import clsx from "clsx";
import { Badge } from "@/components/ui/badge";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    id: "free",
    label: "FREE TO EARN",
    icon: "/icons/cashback.png",
  },
  {
    id: "ranking",
    label: "RANKING",
    icon: "/icons/ranking.png",
  },
  {
    id: "video",
    label: "VIDEO-NFT",
    icon: "/icons/live.png",
  },
  {
    id: "howto",
    label: "HOW TO BUY",
    icon: "/icons/racing.png",
  },
  {
    id: "new",
    label: "NEW NFTS",
    icon: "/icons/livecasino.png",
    badge: "NEW",
  },
  {
    id: "roadmap",
    label: "ROADMAPS",
    icon: "/icons/minigames.png",
  },
];


export default function QuickNav() {
  return (
    <nav className="bg-[#1F2023] py-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex lg:justify-between max-sm:gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={clsx(
                "group flex flex-col items-center justify-center gap-2 p-4 max-sm:p-1 rounded-xl transition-all duration-200",
                "hover:bg-white/5"
              )}
            >
              <div className="relative">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="object-contain"
                  loading="lazy"
                />
                {item.badge && (
                  <Badge className="absolute -top-2 -right-5 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </Badge>
                )}
              </div>
              <span className="text-white text-xs md:text-sm text-center">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
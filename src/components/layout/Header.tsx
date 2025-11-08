// src/components/layout/Header.tsx

import { useState } from "react";
import { TextAlignStart, X  } from "lucide-react";
import clsx from "clsx";
import Button from "@/components/common/Button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "HOME", href: "#", active: true }, // giả sử HOME đang active
  { label: "ITEMS1", href: "#" },
  { label: "ITEMS2", href: "#" },
  { label: "ITEMS3", href: "#" },
  { label: "ITEMS4", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white">
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4">
        <div className="flex">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <TextAlignStart size={28} />}
          </button>
          {/* Logo */}
          <a href="#" className="flex items-center min-w-[60px]">
            <img src={logo} alt="E-Tech Logo" className="h-8 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center ml-8">
            <div className="flex items-center rounded-full px-2 py-1 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={clsx(
                    "px-4 py-2 text-sm font-bold transition-all duration-200 rounded-full",
                    item.active
                      ? "bg-[#383A42] text-[#FFC700]"
                      : "text-gray-200 hover:bg-[#383A42] hover:text-[#FFC700]"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="primary" size="md" className="border-2 border-black">
            SIGN UP
          </Button>
          <Button
            variant="secondary"
            size="md"
            className="bg-black border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            LOG IN
          </Button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1F2023] py-6 h-screen overflow-y-hidden">
          <nav className="flex flex-col items-center gap-4">
            <div className="flex flex-col w-full rounded-2xl px-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "px-2 py-3 text-sm font-bold text-center rounded-full transition-all duration-200",
                    item.active
                      ? "bg-[#383A42] text-[#FFC700]"
                      : "text-gray-200 hover:bg-[#383A42] hover:text-[#FFC700]"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

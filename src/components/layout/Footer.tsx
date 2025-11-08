import { FooterSection } from "@/types";
import installapp from "@/assets/installapp.png"

const sections: FooterSection[] = [
  {
    title: "ABOUT US",
    links: [
      "Careers",
      "Company Details",
      "Terms & Conditions",
      "Investors",
      "Privacy Policy",
      "Affiliate",
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      "NFT Marketplace",
      "Stealbot",
      "Staking",
      "NFT Launchpad",
      "Rune Platform",
      "Creator Dashboard",
    ],
  },
  {
    title: "RESOURCES",
    links: [
      "Support",
      "API",
      "Tutorials (Guides)",
      "Trust & Safety",
      "Sitemap",
    ],
  },
  {
    title: "CONTACT US",
    links: ["support@etech.vn", "affiliate@tech.com"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link.includes("@") ? `mailto:${link}` : "#"}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              {section.title === "CONTACT US" && (
                <div className="mt-4">
                  <img src={installapp} alt="" className="w-auto h-11" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
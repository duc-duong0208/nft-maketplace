import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  variant?: "gradient" | "solid";
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl lg:text-3xl font-black italic text-[#FFC700]",
        className
      )}
    >
      {children}
    </h2>
  );
}
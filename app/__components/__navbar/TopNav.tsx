"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { topNav } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNav = () => {
  const path = usePathname();
  return (
    <div className="md:flex items-center justify-between hidden">
      <TooltipProvider>
        {topNav.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger>
              <Link
                className={cn(
                  "text-2xl hover:text-primary transition-colors",
                  path === item.link ? "text-primary" : ""
                )}
                href={item.link}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p> {item.label} </p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default TopNav;

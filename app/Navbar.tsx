"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { topNav } from "@/data";
import { cn } from "@/lib/utils";
import { Avatar, Grid } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { TbMessageCircle2 } from "react-icons/tb";

const Navbar = () => {
  const { data } = useSession();
  const path = usePathname();
  return (
    <div className="max-w-screen-2xl mx-auto px-6 h-[70px] flex items-center shadow-md">
      <Grid
        columns={{ initial: "1fr", sm: "1fr 1fr 1fr" }}
        width="100%"
        gap="5"
      >
        <div className="hidden items-center gap-5 justify-start md:flex">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold">
            FF
          </div>
          <div className="flex items-center justify-between border rounded-3xl px-2 gap-2">
            <BiSearch className="text-xl text-gray-400" />
            <input
              type="text"
              className="border-none focus:outline-none flex-1 py-2"
              placeholder="Search FanField"
            />
          </div>
        </div>
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
        <div className="flex items-center justify-end gap-6">
          <Link className="text-2xl" href="/">
            <TbMessageCircle2 />
          </Link>
          <Link className="text-2xl" href="/">
            <HiOutlineBell />
          </Link>
          <Avatar
            radius="full"
            src={data?.user?.image!}
            fallback={data?.user?.name?.slice(0, 1)!}
          />
        </div>
      </Grid>
    </div>
  );
};

export default Navbar;

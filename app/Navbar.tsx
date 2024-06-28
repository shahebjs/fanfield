"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Avatar, Grid } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { GrGroup, GrHomeRounded } from "react-icons/gr";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbMessageCircle2 } from "react-icons/tb";

const topNav = [
  { id: 1, icon: <GrHomeRounded />, label: "Home", link: "/" },
  { id: 2, icon: <HiOutlineUsers />, label: "Friends", link: "/friends" },
  { id: 3, icon: <AiOutlineYoutube />, label: "Videos", link: "/videios" },
  { id: 4, icon: <GrGroup />, label: "Groups", link: "/groups" },
];

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

import { Grid } from "@radix-ui/themes";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { TbMessageCircle2 } from "react-icons/tb";
import NavSearch from "../NavSearch";
import NavProfile from "./NavProfile";
import ToggleNav from "./ToggleNav";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 h-[70px] flex items-center shadow-md">
      <Grid
        columns={{ initial: "1fr 1fr", sm: "1fr 1fr 1fr" }}
        width="100%"
        gap="5"
      >
        <div className="flex items-center gap-2 md:gap-5 justify-start">
          <Link
            href="/"
            className="cursor-pointer w-9 h-9 md:w-11 md:h-11 rounded-full bg-primary text-white flex items-center justify-center md:text-xl font-semibold"
          >
            FF
          </Link>
          <div className="block md:hidden">
            <NavSearch />
          </div>
          <div className="block md:hidden">
            <ToggleNav />
          </div>
          <div className="hidden md:flex items-center justify-between border rounded-3xl px-2 gap-2">
            <BiSearch className="text-xl text-gray-400" />
            <input
              type="text"
              className="border-none focus:outline-none flex-1 py-2"
              placeholder="Search FanField"
            />
          </div>
        </div>
        <TopNav />
        <div className="flex items-center justify-end gap-2 md:gap-6">
          <div className="bg-gray-200 dark:bg-gray-800 w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center">
            <Link className="text-2xl" href="/">
              <TbMessageCircle2 />
            </Link>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center">
            <Link className="text-2xl" href="/">
              <HiOutlineBell />
            </Link>
          </div>
          <NavProfile />
        </div>
      </Grid>
    </div>
  );
};

export default Navbar;

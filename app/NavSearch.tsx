import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiSearch } from "react-icons/bi";

const NavSearch = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-9 h-9 md:w-11 md:h-11 bg-gray-200 dark:bg-gray-800 cursor-pointer rounded-full flex items-center justify-center">
          <BiSearch className="text-xl md:text-2xl" />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <div className="flex items-center justify-between border rounded-3xl px-2 gap-2 mt-5 w-full">
            <BiSearch className="text-xl text-gray-400" />
            <input
              type="text"
              className="border-none focus:outline-none flex-1 py-2"
              placeholder="Search FanField"
            />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavSearch;

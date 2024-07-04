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
        <div className="bg-gray-200 w-11 cursor-pointer h-11 rounded-full flex items-center justify-center">
          <BiSearch className="text-2xl" />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <div className="flex items-center justify-between border rounded-3xl px-2 gap-2 mt-5">
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

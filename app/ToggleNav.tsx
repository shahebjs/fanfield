"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { sideNav } from "@/data";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

const ToggleNav = () => {
  const { data } = useSession();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="hover:bg-gray-200 transition-colors cursor-pointer w-10 h-10 rounded-full flex items-center justify-center">
          <IoMenuSharp className="text-2xl" />
        </div>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="py-6 overflow-auto space-y-10">
          <Link
            className="flex items-center gap-3 font-semibold text-gray-600"
            href="/"
          >
            <Image
              width={40}
              height={40}
              src={data?.user?.image!}
              className="rounded-full object-cover"
              alt={data?.user?.name?.slice(0, 1)!}
            />
            {data?.user?.name}
          </Link>
          {sideNav.map((item) => (
            <Link
              key={item.id}
              className="flex items-center gap-3 text-gray-600"
              href="/"
            >
              <span className="text-2xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ToggleNav;

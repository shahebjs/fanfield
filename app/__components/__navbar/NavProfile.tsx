import authOptions from "@/app/api/auth/authOptions";
import LogoutBtn from "@/components/LogoutBtn";
import { ModeToggle } from "@/components/ModeToggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import prisma from "@/prisma/client";
import { Avatar } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Image from "next/image";

const NavProfile = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { id: session?.user.id },
  });

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          size={{ initial: "2", sm: "3" }}
          radius="full"
          src={user?.image!}
          fallback={user?.name!}
        />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-1 items-center mb-2">
          <Image
            src={user?.image!}
            width={70}
            height={70}
            className="rounded-full border-primary"
            alt={user?.name!}
          />
          <div className="text-center">
            <h3 className="md:text-xl font-semibold">{user?.name}</h3>
            <p className="text-xs text-gray-500"> {user?.email} </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2 justify-between">
            <span className="text-sm md:text-lg">Theme</span> <ModeToggle />
          </div>
          <LogoutBtn />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NavProfile;

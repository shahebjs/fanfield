import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar } from "@radix-ui/themes";
import Image from "next/image";

interface Props {
  img: string;
  name: string;
  email: string;
}

const NavProfile = ({ img, name, email }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          size={{ initial: "2", sm: "3" }}
          radius="full"
          src={img}
          fallback={name}
        />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-1 items-center mb-2">
          <Image
            src={img}
            width={70}
            height={70}
            className="rounded-full border-primary"
            alt={name}
          />
          <div className="text-center">
            <h3 className="md:text-xl font-semibold">{name}</h3>
            <p className="text-xs text-gray-500"> {email} </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2 justify-between">
            <span className="text-sm md:text-lg">Theme</span> <ModeToggle />
          </div>
          <Button variant="secondary">Logout</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NavProfile;

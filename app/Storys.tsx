import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import authOptions from "./api/auth/authOptions";

const Storys = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="w-full relative">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/3 md:basis-1/4">
              <div className="h-[240px] w-full rounded-2xl overflow-hidden shadow-md border flex flex-col items-center">
                <Image
                  src={session?.user?.image!}
                  alt={session?.user?.name!}
                  width={200}
                  height={250}
                  className="object-cover h-[180px]"
                />
                <div className="cursor-pointer w-12 h-12 rounded-full bg-primary text-white text-xl flex items-center justify-center border-[5px] border-white -mt-4">
                  <FaPlus />
                </div>
                <p className="text-sm mb-1">Create Story</p>
              </div>
            </CarouselItem>
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem key={i} className="basis-1/3 md:basis-1/4">
                <div className="h-[240px] w-full rounded-2xl overflow-hidden shadow-md border relative">
                  <Image
                    src="/me.jpg"
                    alt="user"
                    width={200}
                    height={250}
                    className="object-cover h-full"
                  />
                  <div className="absolute top-3 left-3 rounded-full border-2 border-white">
                    <Avatar
                      radius="full"
                      src="/me.png"
                      fallback="user"
                      size="3"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0" />
          <CarouselNext className="absolute right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default Storys;

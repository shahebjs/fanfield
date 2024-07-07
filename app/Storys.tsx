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
import AddStory from "./AddStory";
import authOptions from "./api/auth/authOptions";
import prisma from "@/prisma/client";

const Storys = async () => {
  const session = await getServerSession(authOptions);
  const storys = await prisma.story.findMany({
    include: { user: true },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <div className="w-full relative">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/4 md:basis-1/5">
              <div className="h-[150px] md:h-[180px] lg:h-[240px] w-full rounded-2xl overflow-hidden shadow-md border flex flex-col items-center">
                <Image
                  src={session?.user?.image!}
                  alt={session?.user?.name!}
                  width={200}
                  height={250}
                  className="object-cover h-[180px] -mt-6 md:mt-0"
                />
                <AddStory />
                <p className="text-[10px] md:text-sm mb-1">Create Story</p>
              </div>
            </CarouselItem>
            {storys.map((story) => (
              <CarouselItem key={story.id} className="basis-1/4 md:basis-1/5">
                <div className="h-[150px] md:h-[180px] lg:h-[240px] w-full rounded-2xl overflow-hidden shadow-md border relative">
                  <Image
                    src={story.img}
                    alt="user"
                    width={200}
                    height={250}
                    className="object-cover h-full"
                  />
                  <div className="absolute top-2 left-2 rounded-full border-2 border-white">
                    <Avatar
                      radius="full"
                      src={story.user.image!}
                      fallback="user"
                      size={{ initial: "1", sm: "2", md: "3" }}
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

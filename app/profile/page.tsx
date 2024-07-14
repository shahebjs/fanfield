import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import { Avatar, Container } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import authOptions from "../api/auth/authOptions";
import Navbar from "../__components/__navbar/Navbar";
import UploadProfilePhoto from "./UploadProfilePhoto";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { id: session?.user.id },
  });

  if (!user) return null;

  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black">
        <Navbar />
      </div>
      <Container className="mt-[70px]">
        <div className="relative w-full z-10">
          <Image
            width={900}
            height={300}
            src="/cover.jpg"
            alt="cover photo"
            className="w-full object-cover max-h-[300px] rounded-b-lg"
          />
          <Button
            size="sm"
            className="absolute right-4 bottom-4"
            variant="outline"
          >
            <FaCamera className="mr-1" />
            Edit cover photo
          </Button>
          <div className="px-5 md:px-10 w-full absolute flex items-center gap-3 h-[60px] lg:-bottom-[80px] -bottom-[50px]">
            <div className="relative">
              <Avatar
                size={{ initial: "6", sm: "9" }}
                radius="full"
                src={user.image as string}
                fallback={user.name as string}
                className="border-[5px]"
              />
              <UploadProfilePhoto />
            </div>
            <div className="flex h-full flex-col justify-center mt-3 text-gray-700 dark:text-gray-300">
              <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
                {user?.name}
              </h1>
              <p className="text-xs md:text-lg font-semibold text-gray-400">
                25k followers | 18 following
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;

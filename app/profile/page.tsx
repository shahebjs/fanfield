import { Button } from "@/components/ui/button";
import { Avatar, Container } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import authOptions from "../api/auth/authOptions";
import Navbar from "../Navbar";

const Profile = async () => {
  const session = await getServerSession(authOptions);
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
                src={session?.user.image}
                fallback={session?.user.name}
                className="border-[5px]"
              />
              <div className="absolute right-0 lg:right-1 cursor-pointer lg:text-lg bottom-3 w-5 h-5 md:w-9 md:h-9 flex items-center justify-center bg-gray-300 dark:bg-gray-500 dark:text-gray-900 rounded-full">
                <FaCamera />
              </div>
            </div>
            <div className="flex h-full flex-col justify-center mt-3 text-gray-700 dark:text-gray-300">
              <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
                {session?.user.name}
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

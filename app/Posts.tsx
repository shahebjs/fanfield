import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import { Avatar } from "@radix-ui/themes";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";

const Posts = async () => {
  const posts = await prisma.post.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="space-y-7">
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded-2xl shadow-md py-4 space-y-3 border"
        >
          <div className="flex items-center justify-between px-4">
            <div className="flex items-start gap-2">
              <Avatar radius="full" src={post.user.image!} fallback="U" />
              <div>
                <h3 className="font-semibold text-gray-600 dark:text-gray-300">
                  {post.user.name}
                </h3>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  {post.createdAt.toDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-2xl">
              <BsThreeDots />
              <IoClose />
            </div>
          </div>
          {post.text && (
            <div className="px-3">
              <p className="md:text-xl">{post.text}</p>
            </div>
          )}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={post.img!}
              width={400}
              height={600}
              alt="post image"
              className="w-full"
            />
          </div>
          <hr />
          <div className="flex items-center justify-around text-gray-500">
            <Button variant="ghost">
              <SlLike className="mr-2 text-2xl" /> Like
            </Button>
            <Button variant="ghost">
              <FaRegComment className="mr-2 text-2xl" />
              Comment
            </Button>
            <Button variant="ghost">
              <RiShareForwardLine className="mr-2 text-2xl" />
              Share
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

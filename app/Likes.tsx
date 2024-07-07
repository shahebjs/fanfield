import prisma from "@/prisma/client";
import { BiSolidLike } from "react-icons/bi";

interface Props {
  postId: string;
}

const Likes = async ({ postId }: Props) => {
  const likesCount = await prisma.like.count({ where: { postId } });
  return (
    <div className="flex items-center">
      {likesCount >= 1 ? (
        <div className="flex items-center gap-1 text-xl">
          <BiSolidLike className="text-primary" /> {likesCount}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Likes;

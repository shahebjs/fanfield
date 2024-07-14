"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSession } from "next-auth/react";
import { SlLike } from "react-icons/sl";

interface Props {
  postId: string;
}

const AddLike = ({ postId }: Props) => {
  const { data } = useSession();
  return (
    <Button
      variant="ghost"
      onClick={() =>
        axios
          .post("/api/likes", { userId: data?.user.id, postId })
          .then((res) => window.location.reload())
          .catch((err) => console.log(err))
      }
    >
      <SlLike className="mr-2 text-2xl" /> Like
    </Button>
  );
};

export default AddLike;

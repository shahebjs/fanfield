"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { storage } from "@/firebase";
import { joiResolver } from "@hookform/resolvers/joi";
import { Separator } from "@radix-ui/themes";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Joi from "joi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { BsGlobe } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdAddToPhotos } from "react-icons/md";

interface FormData {
  img: FileList;
  text: string;
}

const schema = Joi.object({
  img: Joi.any(),
  text: Joi.string(),
});

interface Props {
  dialogTrigger: ReactNode;
}

const PhotoVideo = ({ dialogTrigger }: Props) => {
  const [loading, setLoading] = useState(false);
  const session = useSession();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const file = data.img[0];
    const storageRef = ref(storage, `${Date.now()}`);
    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL: string) => {
        axios
          .post("/api/posts", {
            userId: session.data?.user.id,
            text: data.text,
            img: downloadURL,
          })
          .then((res) => {
            localStorage.setItem("token", res.headers["x-auth-token"]);
            setLoading(false);
            window.location.reload();
          })
          .catch((err) => {
            setLoading(false);
          });
      });
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">{dialogTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center md:text-xl font-semibold">
            Create Post
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="w-full flex items-center gap-2">
          <Image
            src={session?.data?.user?.image!}
            width={45}
            height={45}
            alt="U"
            className="rounded-full object-cover"
          />
          <div>
            <p> src={session?.data?.user?.name} </p>
            <p className="flex items-center gap-1 text-sm">
              <BsGlobe /> Public
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
          <div className="flex items-center justify-between py-3">
            <input
              {...register("text")}
              type="text"
              placeholder="Type your post..."
              className="border-none w-full bg-transparent focus:outline-none"
            />
          </div>

          <div className="w-full h-[200px] border rounded-lg p-2 relative">
            <div className="w-full h-full bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer relative">
              <div className="flex items-center justify-center flex-col">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-200 dark:bg-black rounded-full">
                  <MdAddToPhotos className="text-2xl" />
                </div>
                <h2 className="font-semibold md:text-xl">Add Photos/Videos</h2>
                <p className="text-xs text-gray-400">or drag and drop</p>
              </div>
              <input
                {...register("img")}
                type="file"
                className="w-full h-full absolute cursor-pointer opacity-0"
              />
            </div>
            <div className="w-8 h-8 bg-white dark:bg-black rounded-full text-xl cursor-pointer flex items-center justify-center absolute top-3 right-3">
              <IoClose />
            </div>
          </div>

          <Button className="w-full" type="submit">
            {loading ? "Loading..." : "Post"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoVideo;

"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdAddToPhotos } from "react-icons/md";
import InputEmoji from "react-input-emoji";

const PhotoVideo = () => {
  const { data } = useSession();
  const [showMediaOption, setShowMediaOption] = useState(true);
  const [text, setText] = useState("");
  function handleOnEnter(text: string) {
    console.log("enter", text);
  }
  return (
    <Dialog>
      <DialogTrigger>
        <span className={buttonVariants({ variant: "ghost" })}>
          <IoMdPhotos className="text-green-500 mr-2 text-xl md:text-2xl" />
          Photo/Video
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center md:text-xl font-semibold">
            Create Post
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="w-full flex items-center gap-2">
          <Image
            src={data?.user?.image!}
            width={45}
            height={45}
            alt="U"
            className="rounded-full object-cover"
          />
          <div>
            <p> {data?.user?.name} </p>
            <p className="flex items-center gap-1 text-sm">
              <BsGlobe /> Public
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between py-3">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
            shouldReturn={true}
            borderColor="#ddd"
            shouldConvertEmojiToImage={false}
            background="transparent"
          />
        </div>
        {showMediaOption && (
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
                type="file"
                className="w-full h-full absolute cursor-pointer opacity-0"
              />
            </div>
            <div
              onClick={() => setShowMediaOption(false)}
              className="w-8 h-8 bg-white dark:bg-black rounded-full text-xl cursor-pointer flex items-center justify-center absolute top-3 right-3"
            >
              <IoClose />
            </div>
          </div>
        )}
        <Button disabled>Post</Button>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoVideo;

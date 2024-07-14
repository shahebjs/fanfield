"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { storage } from "@/firebase";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Joi from "joi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";

interface FormData {
  img: FileList;
}

const schema = Joi.object({
  img: Joi.any(),
});

const AddStory = () => {
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
          .post("/api/storys", {
            userId: session.data?.user.id,
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
      <DialogTrigger>
        <div className="cursor-pointer w-9 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white text-lg md:text-xl flex items-center justify-center border-2 md:border-[5px] border-white dark:border-black -mt-4">
          <FaPlus />
        </div>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <input
                {...register("img")}
                className="absolute opacity-0 w-full h-full"
                type="file"
              />
              <Image src="/gallery.png" width={100} height={100} alt="input" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center">
            Create a photo story
          </h2>
          <Button type="submit" className="w-full mt-4">
            {loading ? "Loading..." : "Updoad"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStory;

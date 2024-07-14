"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/firebase";
import Image from "next/image";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import { useSession } from "next-auth/react";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

interface FormData {
  img: FileList;
}

const schema = Joi.object({
  img: Joi.any(),
});

const UploadProfilePhoto = () => {
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
          .patch(`/api/profile/${session.data?.user.id}`, {
            image: downloadURL,
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
        <div className="absolute right-0 lg:right-1 cursor-pointer lg:text-lg bottom-3 w-5 h-5 md:w-9 md:h-9 flex items-center justify-center bg-gray-300 dark:bg-gray-500 dark:text-gray-900 rounded-full">
          <FaCamera />
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
            Select your profile picture
          </h2>
          <Button type="submit" className="w-full mt-4">
            {loading ? "Loading..." : "Updoad"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadProfilePhoto;

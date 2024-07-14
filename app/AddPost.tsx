import { buttonVariants } from "@/components/ui/button";
import { Avatar } from "@radix-ui/themes";
import { IoMdPhotos } from "react-icons/io";
import AddReel from "./AddReel";
import GoToLive from "./GoToLive";
import PhotoVideo from "./PhotoVideo";

const AddPost = () => {
  return (
    <div className="py-5 rounded-2xl shadow-md border space-y-3">
      <PhotoVideo
        dialogTrigger={
          <div className="flex items-center justify-between gap-3 px-2 w-full cursor-pointer">
            <Avatar radius="full" src="me.png" fallback="User" />
            <p className="text-left text-gray-400 p-2 flex-1 focus:outline-none bg-gray-100 dark:bg-black rounded-3xl hover:bg-gray-200">
              What't on your mind, Herdoy?
            </p>
          </div>
        }
      />
      <hr />
      <div className="flex items-center justify-between md:justify-around">
        <GoToLive />
        <PhotoVideo
          dialogTrigger={
            <span className={buttonVariants({ variant: "ghost" })}>
              <IoMdPhotos className="text-green-500 mr-2 text-xl md:text-2xl" />
              Photo/Video
            </span>
          }
        />
        <AddReel />
      </div>
    </div>
  );
};

export default AddPost;

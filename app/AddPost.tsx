import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/themes";
import { IoMdPhotos } from "react-icons/io";
import { LuClapperboard } from "react-icons/lu";
import GoToLive from "./GoToLive";

const AddPost = () => {
  return (
    <div className="py-5 rounded-2xl shadow-md border space-y-3">
      <div className="flex items-center justify-between gap-3 px-2">
        <Avatar radius="full" src="me.png" fallback="User" />
        <input
          type="text"
          className="p-2 flex-1 focus:outline-none bg-gray-100 rounded-3xl hover:bg-gray-200"
          placeholder="What't on your mind, Herdoy?"
        />
      </div>
      <hr />
      <div className="flex items-center justify-between md:justify-around">
        <GoToLive />
        <Button variant="ghost">
          <IoMdPhotos className="text-green-500 mr-2 text-xl md:text-2xl" />
          Photo/Video
        </Button>
        <Button variant="ghost">
          <LuClapperboard className="text-primary mr-2 text-xl md:text-2xl" />
          Reel
        </Button>
      </div>
    </div>
  );
};

export default AddPost;

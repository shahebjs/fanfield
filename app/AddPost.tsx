import { Avatar } from "@radix-ui/themes";
import AddReel from "./AddReel";
import GoToLive from "./GoToLive";
import PhotoVideo from "./PhotoVideo";

const AddPost = () => {
  return (
    <div className="py-5 rounded-2xl shadow-md border space-y-3">
      <div className="flex items-center justify-between gap-3 px-2">
        <Avatar radius="full" src="me.png" fallback="User" />
        <input
          type="text"
          className="p-2 flex-1 focus:outline-none bg-gray-100 dark:bg-black rounded-3xl hover:bg-gray-200"
          placeholder="What't on your mind, Herdoy?"
        />
      </div>
      <hr />
      <div className="flex items-center justify-between md:justify-around">
        <GoToLive />
        <PhotoVideo />
        <AddReel />
      </div>
    </div>
  );
};

export default AddPost;

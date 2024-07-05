import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

const AddStory = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer w-9 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white text-lg md:text-xl flex items-center justify-center border-2 md:border-[5px] border-white dark:border-black -mt-4">
          <FaPlus />
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <input className="absolute opacity-0 w-full h-full" type="file" />
            <Image src="/gallery.png" width={100} height={100} alt="input" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center">
          Create a photo story
        </h2>
        <Button disabled>Updoad</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddStory;

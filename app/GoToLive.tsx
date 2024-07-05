import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaVideo } from "react-icons/fa6";

const GoToLive = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className={buttonVariants({ variant: "ghost" })}>
          <FaVideo className="text-primary mr-2 text-xl md:text-2xl" /> Live
          Video
        </span>
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center flex-col gap-2">
        <div className="w-20 h-20 md:w-32 md:h-32 border border-primary flex items-center justify-center rounded-full">
          <h1 className="text-5xl md:text-7xl text-primary">!</h1>
        </div>
        <h2 className="md:text-xl">This feature is currently unavailable.</h2>
      </DialogContent>
    </Dialog>
  );
};

export default GoToLive;

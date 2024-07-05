import { buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LuClapperboard } from "react-icons/lu";

const AddReel = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className={buttonVariants({ variant: "ghost" })}>
          <LuClapperboard className="text-primary mr-2 text-xl md:text-2xl" />
          Reel
        </span>
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center flex-col gap-2 py-8">
        <div className="w-20 h-20 md:w-32 md:h-32 border border-primary flex items-center justify-center rounded-full">
          <h1 className="text-5xl md:text-7xl text-primary">!</h1>
        </div>
        <h2 className="md:text-xl">This feature is currently unavailable.</h2>
      </DialogContent>
    </Dialog>
  );
};

export default AddReel;

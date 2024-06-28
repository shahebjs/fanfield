import { AiOutlineYoutube } from "react-icons/ai";
import { GrGroup, GrHomeRounded } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi2";
import { ImFeed } from "react-icons/im";
import { TbMessageCircle2 } from "react-icons/tb";

export const topNav = [
  { id: 1, icon: <GrHomeRounded />, label: "Home", link: "/" },
  { id: 2, icon: <HiOutlineUsers />, label: "Friends", link: "/friends" },
  { id: 3, icon: <AiOutlineYoutube />, label: "Videos", link: "/videios" },
  { id: 4, icon: <GrGroup />, label: "Groups", link: "/groups" },
];

export const sideNav = [
  { id: 1, icon: <GrHomeRounded />, label: "Home", link: "/" },
  { id: 2, icon: <ImFeed />, label: "Feeds", link: "/" },
  { id: 3, icon: <HiOutlineUsers />, label: "Friends", link: "/friends" },
  { id: 4, icon: <GrGroup />, label: "Groups", link: "/groups" },
  { id: 5, icon: <AiOutlineYoutube />, label: "Videos", link: "/videios" },
  { id: 6, icon: <TbMessageCircle2 />, label: "Messages", link: "/messages" },
];

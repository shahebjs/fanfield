import { sideNav } from "@/data";
import { Avatar } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Link from "next/link";
import authOptions from "./api/auth/authOptions";

const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="py-6 overflow-auto space-y-10">
      <Link
        className="flex items-center gap-3 font-semibold text-gray-600 dark:text-gray-400"
        href="/"
      >
        <Avatar
          radius="full"
          src={session?.user?.image!}
          fallback={session?.user?.name?.slice(0, 1)!}
        />
        {session?.user?.name}
      </Link>
      {sideNav.map((item) => (
        <Link
          key={item.id}
          className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
          href="/"
        >
          <span className="text-2xl">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "flex h-12 w-full items-center justify-between bg-white shadow-sm",
        "px-2 py-2 lg:px-4"
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className={cn(
          "my-4 select-none text-center text-xl font-bold md:text-2xl",
          "animate-rgb bg-gradient-to-r from-blue-400 via-purple-600 to-blue-600 bg-clip-text text-transparent"
        )}
      >
        Tiktok Saver
      </Link>
      <div className="flex items-center gap-4 px-2 md:px-4 md:text-lg">
        <a
          target="_blank"
          href="https://twitter.com/riadazz"
          className="block hover:underline"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

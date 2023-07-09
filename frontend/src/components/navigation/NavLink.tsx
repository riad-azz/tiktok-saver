import Link from "next/link";

type NavLinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, target, children }) => {
  return (
    <li>
      <Link
        href={href}
        target={target}
        className="flex items-center gap-2 rounded px-3 py-2 font-medium text-white hover:bg-blue-400"
      >
        {children}
      </Link>
    </li>
  );
};

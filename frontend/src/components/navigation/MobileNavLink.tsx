import Link from "next/link";

type MobileNavLinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
};

export const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  target,
  children,
}) => {
  return (
    <li>
      <Link
        href={href}
        target={target}
        className="flex w-full items-center justify-center gap-4 py-2 px-4 font-bold bg-blue-400 text-white hover:bg-blue-500"
      >
        {children}
      </Link>
    </li>
  );
};

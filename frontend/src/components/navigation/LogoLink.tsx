import Link from "next/link";
import { Icons } from "@/components/Icons";

type LogoLinkProps = {
  title: string;
  href: string;
};

export const LogoLink: React.FC<LogoLinkProps> = ({ title, href }) => {
  return (
    <Link className="flex items-center gap-2 py-2" href={href}>
      <Icons.download />
      <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
        {title}
      </span>
    </Link>
  );
};

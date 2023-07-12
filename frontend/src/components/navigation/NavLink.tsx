type NavLinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLAnchorElement>;

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  target,
  children,
  ...props
}) => {
  return (
    <li>
      <a
        href={href}
        target={target}
        className="flex items-center gap-2 rounded px-3 py-2 hover:text-blue-600"
        {...props}
      >
        {children}
      </a>
    </li>
  );
};

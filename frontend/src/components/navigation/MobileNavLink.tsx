type MobileNavLinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLAnchorElement>;

export const MobileNavLink: React.FC<MobileNavLinkProps> = ({
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
        className="flex w-full items-center justify-center gap-4 bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
        {...props}
      >
        {children}
      </a>
    </li>
  );
};

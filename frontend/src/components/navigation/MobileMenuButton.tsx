import { Icons } from "@/components/Icons";

type MobileMenuButtonProps = {
  onClick: () => void;
};

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      data-collapse-toggle="navbar-dropdown"
      type="button"
      className="order-last ml-3 inline-flex items-center rounded-lg border p-2 border-white text-white hover:opacity-90 md:hidden"
      aria-controls="navbar-dropdown"
      aria-expanded="false"
    >
      <span className="sr-only">Open navbar menu</span>
      <Icons.menu />
    </button>
  );
};

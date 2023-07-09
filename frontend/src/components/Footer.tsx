const Footer = () => {
  return (
    <footer className="border-0 bg-gray-900 text-gray-200 shadow-lg py-1">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-2 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2023
          <a
            target="_blank"
            href="https://github.com/riad-azz"
            className="mx-1 hover:underline"
          >
            riad-azz
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium md:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/riad-azz"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/riad-azz"
              className="hover:underline"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

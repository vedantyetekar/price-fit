import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1.5">
          <Image
            alt="logo"
            width={32}
            height={32}
            src="/assets/icons/logo.png"
          />
          <p className="nav-logo">
            b4u<span className="text-green-700">Buy</span>
          </p>
        </Link>
        <div className="flex items-center gap-5"></div>
      </nav>
    </header>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];
const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1.5">
          <Image
            alt="logo"
            width={32}
            height={32}
            src="/assets/icons/logo.svg"
          />
          <p className="nav-logo">
            Price<span className="text-primary">Fit</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon, index) => {
            return (
              <Image
                alt={icon.alt}
                key={icon.alt}
                src={icon.src}
                width={28}
                height={28}
                className="object-contain"
              />
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

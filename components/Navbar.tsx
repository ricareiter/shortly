import Image from "next/image";
import logoImg from "@/public/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Image src={logoImg} alt="logo" />
          <div className="hidden space-x-8 font-bold lg:flex">
            <Link
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </Link>
          </div>
        </div>
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <button className="text-veryDarkViolet hover:opacity-70">
            Login
          </button>
          <button className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

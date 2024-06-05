import Image from "next/image";
import logoImg from "@/public/logo.svg";
import facebookIcon from "@/public/icon-facebook.svg";
import twitterIcon from "@/public/icon-twitter.svg";
import pinterestIcon from "@/public/icon-pinterest.svg";
import instagramIcon from "@/public/icon-instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        <Image src={logoImg} alt="logo" />
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Link shortening
              </Link>
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Branded links
              </Link>
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Analytics
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Developers
              </Link>
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Support
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                About
              </Link>
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Our team
              </Link>
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-6">
          <Link href="#">
            <Image src={facebookIcon} alt="facebook icon" />
          </Link>
          <Link href="#">
            <Image src={twitterIcon} alt="twitter icon" />
          </Link>
          <Link href="#">
            <Image src={pinterestIcon} alt="pinterest icon" />
          </Link>
          <Link href="#">
            <Image src={instagramIcon} alt="instagram icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

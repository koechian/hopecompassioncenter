import react from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
// import styles from "./header.module.css";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <nav className="sticky top-1 flex justify-around align-center w-100 background-cream outline-dotted outline-red outline-1 p-3 text-lg">
      <div className={inter.className}>
        <div className="logo-image">
          <Image
            src={"/Title.svg"}
            width={"400"}
            height={"100"}
            alt="Site Logo"
          ></Image>
        </div>
      </div>
      <div className="flex items-right justify-end w-3/4">
        <ul className="flex justify-between flex-row mr-5 p-2 w-1/2">
          <li className="list-none">
            <Link className="no-underline" href="#">
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link href="/about"> About</Link>
          </li>
          <li>
            <Link href="/projects"> Projects</Link>
          </li>
          <li>
            <Link href="Contacts"> Contacts</Link>
          </li>
        </ul>
        <button className=" mx-5 py-2 px-3 bg-orange-400 rounded-md p-4 text-white">
          Donate
        </button>
      </div>
    </nav>
  );
};

export default Header;

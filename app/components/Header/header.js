"use client";

import react from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./header.module.css";

import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const navState = scrollPos > 0;

      setIsScrolled(navState);
    };

    window.addEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={[`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`].join(
        " "
      )}
    >
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
            <Link className={styles.link} href="/">
              {""}
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/pages/about">
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/pages/projects">
              {" "}
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="Contacts">
              {" "}
              Contacts
            </Link>
          </li>
        </ul>
        <button className=" mx-5 py-2 px-3 bg-orange rounded-md p-4 text-white  scale-1.1 cursor-pointer">
          Donate
        </button>
      </div>
    </nav>
  );
};

export default Header;

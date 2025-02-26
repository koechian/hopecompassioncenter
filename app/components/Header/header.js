"use client";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./header.module.css";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const navState = scrollPos > 0;

      setIsScrolled(navState);
    };

    window.addEventListener("scroll", handleScroll);
  });

  function toggleSideNav() {
    setIsOpen(!isOpen)
  }

  const SideNav = () => {
    return (
      <div className={" desktop:hidden tablet:w-1/2 tablet:right-0 w-[100%] p-4 flex flex-col absolute bg-white top-[100%]"}>
        <ul className="flex flex-col gap-4 w-full justify-center tablet:items-start tablet:px-10 items-center">
          <li>
            <Link href='/'>
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
            <Link className={styles.link} href="/pages/gallery">
              {" "}
              Gallery
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/pages/contact">
              {" "}
              Contacts
            </Link>
          </li>
          <li className="w-full">
            <Link href={'/pages/donate'} className="tablet:hidden w-full flex" >
              <button className="w-full py-2 px-3 bg-orange rounded-md p-4 text-white  scale-1.1 cursor-pointer">
                Donate
              </button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <nav
      className={[`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`].join(
        " !px-0 "
      )}
    >
      <div className={inter.className}>
        <div className="logo-image w-1/2 desktop:w-2/3">
          <Image
            src={"/Title.svg"}
            width={"400"}
            height={"100"}
            alt="Site Logo"
            className="h-[4vh] object-contain"
          ></Image>
        </div>
      </div>
      <div className="flex relative items-right justify-end desktop:w-3/4 w-fit">
        <ul className="justify-between flex-row mr-5 p-2 w-1/2 hidden desktop:flex">
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
            <Link className={styles.link} href="/pages/gallery">
              {" "}
              Gallery
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/pages/contact">
              {" "}
              Contacts
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleSideNav}
          className="desktop:hidden ring-1 rounded-md px-3 hover:bg-slate-300">
          {!isOpen
            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          }
        </button>
        <Link href={'/pages/donate'} className="hidden tablet:flex" >
          <button className=" mx-5 py-2 px-3 bg-orange rounded-md p-4 text-white  scale-1.1 cursor-pointer">
            Donate
          </button>
        </Link>


      </div>

      {
        isOpen ? <SideNav /> : null
      }
    </nav>
  );
};

export default Header;

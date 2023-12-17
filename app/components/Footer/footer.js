import react from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./footer.module.css";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="w-100 bg-brown text-white flex flex-col pt-3">
      <div className="grid grid-cols-3 p-5">
        <div>
          <Image src="/footer-banner.svg" width={300} height={150} />
        </div>
        <div>
          <ul>
            <li>
              <Link className={styles.link} href="">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Projects
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Contacts
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ width: "90%" }} className="self-center" />
      <div className="grid grid-cols-3 px-3 pt-3 ">
        <div className="p-2 text-xs text-yellow-100">
          <p>© 2023 Hope Compassion Center</p>
        </div>
        <div
          className="p-2 text-xs text-yellow-100"
          style={{
            backgroundImage: "url('/short-banner.png')",
            backgroundSize: "60%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="p-2 text-xs text-yellow-100 text-right">
          <p>crafted by koechian</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

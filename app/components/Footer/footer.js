import react from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./footer.module.css";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    // <footer className="w-100 bg-brown text-white flex flex-col pt-3">
    //   <div className="grid grid-cols-3 p-5">
    //     <div>
    //       <Image src="/footer-banner.svg" width={300} height={150} />
    //     </div>
    //     <div>
    //       <ul>
    //         <li>
    //           <Link className={styles.link} href="">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link className={styles.link} href="">
    //             Projects
    //           </Link>
    //         </li>
    //         <li>
    //           <Link className={styles.link} href="">
    //             Contacts
    //           </Link>
    //         </li>
    //         <li>
    //           <Link className={styles.link} href="">
    //             About
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <hr style={{ width: "90%" }} className="self-center" />
    //   <div className="grid grid-cols-3 px-3 pt-3 ">
    //     <div className="p-2 text-xs text-yellow-100">
    //       <p>© 2023 Hope Compassion Center</p>
    //     </div>
    //     <div
    //       className="p-2 text-xs text-yellow-100"
    //       style={{
    //         backgroundImage: "url('/short-banner.png')",
    //         backgroundSize: "60%",
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "center",
    //       }}
    //     ></div>
    //     <div className="p-2 text-xs text-yellow-100 text-right">
    //       <p>crafted by koechian</p>
    //     </div>
    //   </div>
    // </footer>


    <footer className="bg-cream rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hope Compassion Center</span> */}
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/pages/about" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link href="/pages/projects" className="hover:underline me-4 md:me-6">Projects</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            
            <li>
              <Link href="/pages/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">HopeCompassionCenter™</Link>. All Rights Reserved.</span>
        <span className="pt-1 text-right block text-sm text-gray-500 sm:text-center dark:text-gray-400">CRAFTED BY <Link href="/" className="hover:underline text-black font-bold font-mono">koechian</Link>.</span>

      </div>
    </footer>


  );
};

export default Footer;

import Image from "next/image";
import Header from "./components/Header/header";
import About from "./about/About";

export default function Home() {
  return <>
    <Header />
    <About />
  </>;
}

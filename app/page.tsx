import Image from "next/image";
import Navbar from "./Components/Navbar";
import CategouryBar from "./Components/CatBar";
import MainBody from "./Components/MainBody";
import Footer from "./Components/footer";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <CategouryBar></CategouryBar>
    <MainBody></MainBody>
    <Footer></Footer>
    </>
  );
}

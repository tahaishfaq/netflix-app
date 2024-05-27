import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import MainLayout from "@/components/MainLayout/MainLayout";


import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      <Header/> 
      <HeroSection/>
      <MainLayout/>
      <Footer/>
    </div>
  );
}

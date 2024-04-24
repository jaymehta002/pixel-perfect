'use client'
import Footer from "@/components/Footer";
import Hero from "@/components/Home/Home";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <> 
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
}

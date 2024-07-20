import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <Navbar/>
  <div class="flex justify-center items-center h-[60vh] ">
    <h1 class="text-4xl font-bold text-center">BERANDA / HOME</h1>
  </div>
  </>
  );
}

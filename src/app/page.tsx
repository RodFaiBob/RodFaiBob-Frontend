import Image from "next/image";
import { HomeBackground } from "@/components/Background";
import { Navbar } from "@/components/common";


export default function Home() {
  return (
    <div>
      <Navbar />

      <HomeBackground />
    </div>
  );
}

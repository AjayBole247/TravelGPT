import Image from "next/image";
import Hero from "./_components/Hero";
import {PopularCityList} from "./_components/PopularCityList";

export default function Home() {
  return (
   <h2>
  <Hero/>
  <PopularCityList />
   </h2>
  );
}

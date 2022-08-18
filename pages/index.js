import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Brief } from "../components/sections/brief";
import { Hero } from "../components/sections/hero";
import { Offering } from "../components/sections/offerings";
import { RoadMap } from "../components/sections/roadmap";
import { Team } from "../components/sections/team";
import { StarkSlides } from "../components/sections/why-starknet";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <Hero />
        <Brief />
        <Offering />
        <RoadMap />
        <StarkSlides />
        <Team />
      </main>
      <Footer />
    </>
  );
}

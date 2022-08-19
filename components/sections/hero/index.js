import styles from "./hero.module.css";
import Image from "next/image";
import bgImage from "../../../assets/images/bg-video.jpeg";
import { Fade } from "react-awesome-reveal";

export function Hero() {
  return (
    <section className="relative">
      <div className="vid-bg ">
        <div className="">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
            placeholder="blur"
            src={bgImage}
            style={{ zIndex: "-1" }}
          />
          <video
            autoPlay
            loop
            muted
            className=" xl:h-screen lg:h-[65vmax] lg:w-full h-[60vh] inset-0 object-cover z-[2]"
          >
            <source src="assets/bg_mov.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute inset-0 max-container">
        <div className={`${styles.hero_text}`}>
          <Fade direction="up" cascade="true" triggerOnce="true">
            <h1 className=" font-CeraPro-Bold xl:text-[75px] lg:text-[50px] md:text-[35px] text-[30px] leading-[138%] text-white">
              Your Access Portal
              <br /> to <span className="text-green_light">StarkNet.</span>
            </h1>
            <p className="font-CeraPro-Light xl:text-[20px] md:text-[16px] text-sm leading-[160%] text-white pt-4">
              StarkDefi is a{" "}
              <span className="text-green_light">DeFi solutions hub</span>,
              providing everything you <br className="lg:block hidden" />
              need to explore the horizon.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}

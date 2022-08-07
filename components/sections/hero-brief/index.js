import styles from "./hero.module.css";
import Image from "next/image";
import Rocket from "../../../assets/icons/rocket.svg";
import bgImage from "../../../assets/images/bg-video.jpeg";

export function HeroBrief() {
  return (
    <section className={`${styles.container} max-container`}>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <h1 className="text-[64px] leading-[138%] text-white">
            Bringing <span className=" text-green_light">StarkNet</span> Closer
            to Your Doorstep.
          </h1>
          <p className="font-CeraPro-Light text-[20px] leading-[160%] text-white pt-4">
            Earn, Swap and Moon on the most used Stark Platform ever!
            <span className="inline-block pl-2">
              <Rocket />
            </span>
          </p>
        </div>

        <Image
          src={bgImage}
          imageBlur="blur"
          alt="hero-bg"
          className={styles.bg_video}
          layout="responsive"
          objectPosition="center"
          placeholder="blur"
        />
      </div>
      <div className={styles.brief}></div>
    </section>
  );
}

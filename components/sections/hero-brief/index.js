import styles from "./hero.module.css";
import Image from "next/image";
import Rocket from "../../../assets/icons/rocket.svg";
import bgImage from "../../../assets/images/bg-video.jpeg";
import ScrollArrow from "../../../assets/icons/scroll-arrow.svg";
import { Text, Title } from "../../utils";
import { Fade } from "react-awesome-reveal";

export function HeroBrief() {
  return (
    <section className={`${styles.container} max-container`}>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <Fade direction="up" cascade="true" triggerOnce="true">
            <h1 className="xl:text-[62px] lg:text-[50px] md:text-[35px] text-[30px] leading-[138%] text-white">
              Bringing
              <br className="md:hidden" />{" "}
              <span className=" text-green_light">Starknet</span>{" "}
              <br className="md:hidden" />
              Closer to Your Doorstep.
            </h1>
            <p className="font-CeraPro-Light xl:text-[20px] md:text-[16px] text-sm leading-[160%] text-white pt-4">
              Earn, Swap and Moon on the most used Stark Platform ever!
              <span className="inline-block pl-2">
                <Rocket />
              </span>
            </p>
          </Fade>
        </div>

        <div className="md:block hidden">
          <Image
            src={bgImage}
            alt="hero-bg"
            className={styles.bg_video}
            layout="responsive"
            objectPosition="center"
            placeholder="blur"
            objectFit="cover"
          />
        </div>

        <div
          className="w-full overflow-hidden relative rounded-t-[35px] md:hidden"
          style={{ height: "56vh" }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            alt=""
            src={bgImage}
          />
        </div>
      </div>
      <div className={styles.brief}>
        <Fade cascade="true" direction="up" triggerOnce="true">
          <Title className="text-white text-center">
            …Your one-stop hub for Defi Solutions on Starknet
          </Title>
          <Title className="text-green_light text-center">
            Don’t be left out, a change is coming…
          </Title>
          <Text className=" text-white opacity-[0.65] text-center pt-8 lg:pb-12 pb-4">
            StarkDeFi is a hub for defi solutions on Starknet, looking to
            improve the adoption of blockchain technology. Starknet provides
            unlimited possibilities for innovative solutions (Scalability) on
            the blockchain. Our aim is to facilitate and simplify the onboarding
            process for newbies in the blockchain space with a hub that
            accommodates a variety of deFi solutions. For us, DeFi is not just
            for the veterans in the space, but for the ordinary person as well.
          </Text>
          <a href="#offers">
            <button>
              <ScrollArrow className="lg:scale-100 md:scale-70 scale-50" />
            </button>
          </a>
        </Fade>
      </div>
    </section>
  );
}

import styles from "./brief.module.css";
import ScrollArrow from "../../../assets/icons/scroll-arrow.svg";
import { Text, Title } from "../../utils";
import { Fade } from "react-awesome-reveal";

export function Brief() {
  return (
    <section className="max-container xl:pt-32 lg:pt-24 pt-16">
      <div className={styles.brief}>
        <Fade cascade="true" direction="up" triggerOnce="true">
          <Title className="text-white text-center">
            ...All-in-one Defi hub for the next generation of
          </Title>
          <Title className="text-green_light text-center">blockchain...</Title>
          <Text className=" text-white opacity-[0.65] text-center pt-8 lg:pb-12 pb-4">
            StarkDeFi is a hub for defi solutions on StarkNet, looking to
            improve the adoption of blockchain technology. StarkNet provides
            unlimited possibilities for innovative solutions (Scalability) on
            the blockchain. Our aim is to facilitate and simplify the onboarding
            process for the “Next generation user” in the blockchain space with
            a hub that accommodates a variety of deFi solutions.
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

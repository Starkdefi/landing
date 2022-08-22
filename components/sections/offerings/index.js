import { Text, Title } from "../../utils";
import styles from "./offers.module.css";
import Lock from "../../../assets/icons/liq-locker.svg";
import Stake from "../../../assets/icons/staking-pool.svg";
import AMM from "../../../assets/icons/AMM.svg";
import Farm from "../../../assets/icons/farm.svg";
import Launch from "../../../assets/icons/launchpad.svg";
import Mint from "../../../assets/icons/mint.svg";

import { Fade } from "react-awesome-reveal";
import FeatureCard2 from "../../feature-card2";

const offers = [
  {
    Icon: Farm,
    title: "FARM",
    text: "Boost your Projects liquidity and earn rewards as a liquidity provider with our farming service.",
    className: "xl:mt-[6rem] lg:mt-[4rem]",
  },
  {
    Icon: AMM,
    title: "AMM",
    text: "Enable Swaps Effortlessly with our AMM solution featuring zap to simplify liquidity provision.",
    className: "",
  },
  {
    Icon: Mint,
    title: "MINT",
    text: "Our platform provides a seamless experience enabling users to mint Tokens and NFT's in just a few clicks.",
    className: "xl:mt-[6rem] lg:mt-[4rem]",
  },
  {
    Icon: Stake,
    title: "STAKING POOL",
    text: "Put your money to work with a wide range of staking options to earn rewards.",
    className: "xl:mt-8",
  },
  {
    Icon: Lock,
    title: "LIQ LOCKER",
    text: "Shuffle through our locking options to find the best fit for your project, to earn your communities trust.",
    className: "xl:-mt-[4rem] lg:-mt-[4rem]",
  },
  {
    Icon: Launch,
    title: "LAUNCHPAD",
    text: "Give your project a chance to succeed with a Launchpad that provides you with the requisite support.",
    className: "xl:mt-8",
  },
];
export function Offering() {
  return (
    <section id="offers" className={`${styles.container} max-container `}>
      <div className="flex flex-col items-center justify-center xl:pt-28 lg:pt-20 pt-14">
        <Fade cascade="true" direction="up" triggerOnce="true">
          <Title className="text-white text-center">
            Our <span className="text-green_light">Products</span>
          </Title>
          <Text className="text-white opacity-[0.65] pt-4 text-center max-w-[54rem]">
            StarkDeFi distinguishes itself by providing a variety of solutions
            to leverage <br className="md:block hidden" /> StarkNet’s
            scalability and Security.
          </Text>
        </Fade>
      </div>
      <div
        className="flex lg:justify-between justify-center pt-12 flex-wrap"
        id="feature-cards"
      >
        {offers.map((offer, i) => (
          <Fade key={i} cascade="true" direction="up" triggerOnce="true">
            <FeatureCard2 {...offer} />
          </Fade>
        ))}
      </div>
    </section>
  );
}

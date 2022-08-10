import { SimpleLink, Text, Title } from "../../utils";
import styles from "./offer.module.css";
import Mint from "../../../assets/icons/mint-icon.svg";
import Swap from "../../../assets/icons/swap-icon.svg";
import Stake from "../../../assets/icons/stake-icon.svg";
import mintIllustration from "../../../assets/images/mint-asset.png";
import swapIllustration from "../../../assets/images/swap-asset.png";
import stakeIllustration from "../../../assets/images/stake-assets.png";
import FeatureCard from "../../feature-card";
import { Fade } from "react-awesome-reveal";

const offers = [
  {
    Icon: Mint,
    title: "Mint",
    text: "Mint tokens and Nft’s with ease in just a few button clicks. We provide you with the platform to create what you dream.",
    link: "https://app.starkdefi.com",
    image: mintIllustration,
    className: "lg:rotate-[18deg] xl:translate-x-[130px] lg:translate-x-[80px]",
  },
  {
    Icon: Swap,
    title: "Swap",
    text: "Looking for an AMM solution thats easy to use, well thats why we’re here. Swap, add and remove liquidity at ease.",
    link: "https://app.starkdefi.com",
    image: swapIllustration,
    className: "",
  },
  {
    Icon: Stake,
    title: "Stake",
    text: "Put your money to work with a wide range of staking options to earn rewards. ",
    link: "https://app.starkdefi.com",
    image: stakeIllustration,
    className:
      "lg:rotate-[-18deg] xl:translate-x-[-130px] lg:translate-x-[-80px] -z-[1]",
  },
];
export function KeyOffering() {
  return (
    <section id="offers" className={`${styles.container} max-container `}>
      <div className="flex flex-col items-center justify-center xl:pt-28 lg:pt-20 pt-14">
        <Fade cascade="true" direction="up" triggerOnce="true">
          <Title className="text-white text-center">
            Our Key <span className="text-green_light">Offerings</span>
          </Title>
          <Text className="text-white opacity-[0.65] pt-4 text-center max-w-[54rem]">
            As your go-to defi hub, we are offering a wide range of defi
            solutions tailored at taking full advantage of the scalable and
            economical features of StarkNet.
          </Text>
          <SimpleLink
            className="text-white opacity-[0.85] text-[16px] pt-4 hover:text-green_light"
            text="See all products"
            url="/#"
          />
        </Fade>
      </div>
      <div className="flex items-center lg:justify-between justify-center pt-20 md:flex-nowrap flex-wrap">
        {offers.map((offer, i) => (
          <FeatureCard key={i} {...offer} />
        ))}
      </div>
    </section>
  );
}

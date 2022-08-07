import { SimpleLink, Text, Title } from "../../utils";
import styles from "./offer.module.css";
import Mint from "../../../assets/icons/mint-icon.svg";
import Swap from "../../../assets/icons/swap-icon.svg";
import Stake from "../../../assets/icons/stake-icon.svg";
import mintIllustration from "../../../assets/images/mint-asset.png";
import swapIllustration from "../../../assets/images/swap-asset.png";
import stakeIllustration from "../../../assets/images/stake-assets.png";
import FeatureCard from "../../feature-card";

const offers = [
  {
    Icon: Mint,
    title: "Mint",
    text: "Sed ut perspiciatis unde omnis iste nats error sitvo luptatem accus antium dolo picia.",
    link: "/#",
    image: mintIllustration,
    className: "lg:rotate-[18deg] xl:translate-x-[130px] lg:translate-x-[80px]",
  },
  {
    Icon: Swap,
    title: "Swap",
    text: "Sed ut perspiciatis unde omnis iste nats error sitvo luptatem accus antium dolo picia.",
    link: "/#",
    image: swapIllustration,
    className: "",
  },
  {
    Icon: Stake,
    title: "Stake",
    text: "Sed ut perspiciatis unde omnis iste nats error sitvo luptatem accus antium dolo picia.",
    link: "/#",
    image: stakeIllustration,
    className:
      "lg:rotate-[-18deg] xl:translate-x-[-130px] lg:translate-x-[-80px] -z-[1]",
  },
];
export function KeyOffering() {
  return (
    <section className={`${styles.container} max-container `}>
      <div className="flex flex-col items-center justify-center xl:pt-28 lg:pt-20 pt-14">
        <Title className="text-white text-center">
          Our Key <span className="text-green_light">Offerings</span>
        </Title>
        <Text className="text-white opacity-[0.65] pt-4 text-center max-w-[54rem]">
          As your go-to defi hub, we are offering a wide range of defi solutions
          tailored at taking full advantage of the scalable and economical
          features of StarkNet.
        </Text>
        <SimpleLink
          className="text-white opacity-[0.85] text-[16px] pt-4 hover:text-green_light"
          text="See all products"
          url="/#"
        />
      </div>
      <div className="flex items-center lg:justify-between justify-center pt-20 md:flex-nowrap flex-wrap">
        {offers.map((offer, i) => (
          <FeatureCard key={i} {...offer} />
        ))}
      </div>
    </section>
  );
}

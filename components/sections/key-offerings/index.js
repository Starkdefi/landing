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
import Script from "next/script";

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
            economical features of Starknet.
          </Text>
          <SimpleLink
            className="text-white opacity-[0.85] text-[16px] pt-4 hover:text-green_light"
            text="See all products"
            url="/#"
          />
        </Fade>
      </div>
      <div
        className="flex items-center lg:justify-between justify-center pt-20 md:flex-nowrap flex-wrap"
        id="feature-cards"
      >
        {offers.map((offer, i) => (
          <FeatureCard key={i} {...offer} id={`feature-card-${i}`} />
        ))}
      </div>
      <Script id="animate-feature-cards" strategy="afterInteractive">
        {`
          // const feature_container = document.getElementById('offers');
          
          // const container_offset_top = feature_container.offsetTop;
          // const container_height = feature_container.offsetHeight;

          // const feature_mint = document.getElementById('feature-card-0');
          // const feature_stake = document.getElementById('feature-card-2');


          // feature_mint.animate(
          //   {
          //     transform: [
          //       // lg:rotate-[18deg] xl:translate-x-[130px] lg:translate-x-[80px]
          //       "rotate(18deg) translateX(130px)",
          //       "rotate(0) translateX(0)"
               
          //     ]
          //   },{
          //     duration: 1,
          //     fill: "both",
          //     timeline: new ScrollTimeline({
          //       scrollSource: document.documentElement,
          //       timeRange: 1,
          //       fill: "both",
          //       scrollOffsets: [
          //         "20%",
          //         "70%"
          //       ]

          //       // scrollOffsets: [
          //       //   {target: feature_container, edge: 'end', threshold: '0'},
          //       //   {target: feature_container, edge: 'start', threshold: '1'}
          //       // ]
          //     })
          //   }
          // )

          // feature_stake.animate(
          //   {
          //     transform: [
          //       // lg:rotate-[-18deg] xl:translate-x-[-130px] lg:translate-x-[-80px]
          //       "rotate(-18deg) translateX(-130px)",
          //       "rotate(0) translateX(0)"
          //     ]
          //   },{
          //     easing: "linear",
          //     timeline: new ScrollTimeline({
          //       source: document.documentElement,
          //       timeRange: 1,
          //       scrollOffsets: [
          //         CSS.px(container_offset_top + container_height - window.innerHeight),
          //         CSS.px(container_offset_top)
          //       ]

          //       // scrollOffsets: [
          //       //   {target: feature_container, edge: 'end', threshold: '0.5'},
          //       //   {target: feature_container, edge: 'start', threshold: '1'}
          //       // ]
          //     })
          //   }
          // )

        `}
      </Script>
    </section>
  );
}

import { SimpleLink, Text, Title } from "../../utils";
import styles from "./offer.module.css";

export function KeyOffering() {
  return (
    <section className={`${styles.navbar} max-container`}>
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
    </section>
  );
}

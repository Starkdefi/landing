import RoadMapWidget from "../../roadmap";
import { Title, Text } from "../../utils";
import styles from "./roadmap.module.css";

export function RoadMap() {
  return (
    <section className={`${styles.container} max-container`}>
      <div className="flex flex-col items-center justify-center">
        <Title className="text-white text-center">
          <span className="text-green_light">Strategy That Puts</span> Us On The
          Map
        </Title>
        <Text className="text-white opacity-[0.65] pt-4 text-center max-w-[54rem] pb-8">
          Come with us on this journey. Wanna know what we’re up to? It’s right
          here.
          <br /> STARKDEFI RAVING MAD!
        </Text>
        <div className="py-16">
          <RoadMapWidget />
        </div>
      </div>
    </section>
  );
}

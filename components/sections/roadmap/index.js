import RoadMapWidget from "../../roadmap";
import { Title, Text } from "../../utils";
import styles from "./roadmap.module.css";
import { Fade } from "react-awesome-reveal";

export function RoadMap() {
  return (
    <section className={`${styles.container} max-container`}>
      <div className="flex flex-col items-center justify-center">
        <Fade direction="up" triggerOnce="true" cascade="true">
          <Title className="text-white text-center">
            <span className="text-green_light">Strategy That Puts</span> Us On
            The Map
          </Title>
          <Text className="text-white opacity-[0.65] pt-4 text-center max-w-[54rem] pb-8 px-4">
            Come with us on this journey. Wanna know what we’re up to? It’s
            right here.
          </Text>
        </Fade>
        <div className="xl:py-16 py-4">
          <RoadMapWidget />
        </div>
      </div>
    </section>
  );
}

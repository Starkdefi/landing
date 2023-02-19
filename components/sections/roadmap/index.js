import { RoadmapQ1, RoadMapQ2 } from "../../roadmap";
import { Title, Text } from "../../utils";
import styles from "./roadmap.module.css";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

const Qs = [
  {
    q: "Q1",
    Roadmap: RoadmapQ1,
  },
  {
    q: "Q2",
    Roadmap: RoadMapQ2,
  },
];
export function RoadMap() {
  const [q, setQ] = useState(Qs[0]);

  return (
    <section id="roadMap" className={`${styles.container} max-container`}>
      <div className="flex flex-col items-center justify-center">
        <Fade direction="up" triggerOnce="true" cascade="true">
          <Title className="text-white text-center">
            <span className="text-green_light">StarkDefi V1.0</span> Development
            Roadmap
          </Title>
          <Text className="text-white opacity-[0.65] pt-4 text-center max-w-[54rem] pb-8 px-4">
            Our roadmap to a new era of defi solutions.
          </Text>
        </Fade>

        <div id="pin1" className="xl:py-16 py-4 w-full">
          <q.Roadmap />
        </div>

        <Title className="text-white text-center flex items-end justify-center gap-3">
          {Qs.map((qter, i) => {
            const classes =
              q.q === qter.q
                ? "text-green_light border-b-green_light "
                : "h-[50px] w-[2vmax] boarder-b-black border-b-opacity-[0.66] ";
            return (
              <span
                key={i}
                className={`${classes} font-CeraPro-Bold border-b-2 pb-2 cursor-pointer`}
                onClick={() => setQ(qter)}
              >
                {q.q === qter.q ? q.q : ""}
              </span>
            );
          })}
        </Title>
      </div>
    </section>
  );
}

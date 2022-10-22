import { SimpleLink, Title } from "../../utils";
import styles from "./team.module.css";
import { Fade } from "react-awesome-reveal";
import { TeamCard } from "../../team-card";
import masamoon from "../../../assets/team/Masamoon.jpeg";
import patrick from "../../../assets/team/Patrick.jpeg";
import godsway from "../../../assets/team/Godsway.jpeg";
import neslisah from "../../../assets/team/neslisah.jpeg";
import iddriss from "../../../assets/team/Iddriss.jpeg";
import brabbit from "../../../assets/team/Brabbit.jpeg";

const team = [
  {
    image: masamoon,
    name: "Masamoon",
    className: "xl:[grid-area:1/1/7/7] [grid-area:1/1/6/6] z-[0]",
  },
  {
    image: patrick,
    name: "Patrick Hemming",
    className:
      "xl:[grid-area:1/8/7/14] [grid-area:1/8/6/14] ml-[1vmax] z-[1] lg:ml-8 lg:-mr-4",
  },
  {
    image: godsway,
    name: "Godsway Annih",
    className: "xl:[grid-area:9/1/14/6] [grid-area:9/1/13/5] z-[1]",
  },
  {
    image: neslisah,
    name: "M.Neslişah Suiçmez",
    className:
      "xl:[grid-area:6/5/12/10] xl:m-0 [grid-area:5/5/10/10] -ml-4 mr-8 z-[1]",
  },
  {
    image: iddriss,
    name: "Iddriss Raaj",
    className:
      "xl:[grid-area:7/11/11/15] xl:m-0 [grid-area:6/10/9/15] -ml-4 mr-4 mt-2 z-[0]",
  },
  {
    image: brabbit,
    name: "B-Rabbit",
    className:
      "xl:[grid-area:11/8/14/12] xl:m-0 xl:mt-[1vmax] [grid-area:11/7/15/11] -mt-4 -mr-4 ml-4 z-[3]",
  },
];
export function Team() {
  return (
    <section
      className={`${styles.container} 3xl:max-container flex items-center justify-between md:flex-row flex-col  xl:py-40 lg:py-32 py-24 md:flex-nowrap  flex-wrap`}
    >
      <div className="md:w-1/2 w-full xl:h-[598px] lg:h-[540px] h-[400px] grid xl:grid-cols-[repeat(14,minmax(0,1fr))] xl:grid-rows-[repeat(15,minmax(0,1fr))] grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[repeat(14,minmax(0,1fr))] mb-8">
        {team.map(({ image, name, className }, key) => (
          <TeamCard key={key} image={image} name={name} className={className} />
        ))}
      </div>

      <div className="xl:pr-[11rem] lg:pr-20 md:w-1/2 w-full lg:pl-16 md:px-8 px-4 pb-8">
        <Fade cascade="true" triggerOnce="true" direction="up">
          <Title className="text-white text-left">
            <span className="text-green_light">Get To Know</span> The Team
          </Title>
          <p className="text-white xl:text-[16px] text-[14px] opacity-[0.65] py-4 leading-[160%]">
            Our abled team consists of experts from across the globe. From
            Europe to Australia to Africa, we bring diversity and a combined
            experience of 20+ years in the Blockchain Industry. We are open to
            your ideas and comments on our implementation and are ever ready to
            create a solution that is sustainable and scalable. We would love to
            have a conversation with you. Head over to our discord to get in
            touch and be a part of the STARKDEFI FAMILY!
          </p>
          <SimpleLink
            text="Connect on Discord"
            className="text-white opacity-[0.85] text-[16px]"
            arrowClass="text-white opacity-[0.85]"
            url="https://discord.com/invite/starkdefi"
            target="_blank"
          />
        </Fade>
      </div>
    </section>
  );
}

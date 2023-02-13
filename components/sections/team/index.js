import { SimpleLink, Title } from "../../utils";
import styles from "./team.module.css";
import { Fade } from "react-awesome-reveal";
import { TeamCard } from "../../team-card";
import patrick from "../../../assets/team/Patrick.jpeg";
import godsway from "../../../assets/team/Godsway.jpeg";
import neslisah from "../../../assets/team/neslisah.jpeg";
import iddriss from "../../../assets/team/Iddriss.jpeg";
import zak from "../../../assets/team/Zak.jpeg";

const team = [
  {
    image: patrick,
    name: "Patrick Hemming",
    className: "xl:[grid-area:1/1/3/4] [grid-area:1/1/4/5] pl-5 xl:-mr-8 -mr-4 z-[1]",
  },
  {
    image: iddriss,
    name: "Iddriss Raaj",
    className: "xl:[grid-area:1/7/3/10] [grid-area:1/9/3/12] xl:-ml-4 pt-4 -mb-4 -ml-4 z-[3]",
  },
  {
    image: godsway,
    name: "Godsway Annih",
    className: "xl:[grid-area:4/7/7/10] [grid-area:5/8/8/12] xl:-ml-8 z-[5] mr-2",
  },
  {
    image: neslisah,
    name: "M.Neslişah Suiçmez",
    className: "xl:[grid-area:4/1/6/4] [grid-area:5/1/9/5] xl:-mt-10 pl-2 z-[4]",
  },
  {
    image: zak,
    name: "Ismael Zak",
    className: "xl:[grid-area:3/4/6/7] [grid-area:3/5/7/9] xl:-mt-20 xl:-ml-4 -ml-2 z-[2]",
  },
  
];
export function Team() {
  return (
    <section
      className={`${styles.container} 3xl:max-container flex items-center justify-between md:flex-row flex-col  xl:py-40 lg:py-32 py-24 md:flex-nowrap  flex-wrap`}
    >
      <div className="md:w-1/2 w-full grid xl:grid-cols-9 grid-cols-11 xl:grid-rows-[repeat(5,minmax(0,1fr))] grid-rows-[repeat(7,minmax(0,1fr))] mb-8">
        {team.map(({ image, name, className }) => (
          <TeamCard
            key={name}
            image={image}
            name={name}
            className={className}
          />
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

import { SimpleLink, Title } from "../../utils";
import styles from "./team.module.css";

export function Team() {
  return (
    <section
      className={`${styles.container} 3xl:max-container flex items-center justify-between md:flex-row flex-col-reverse  xl:py-40 lg:py-32 py-24 md:flex-nowrap  flex-wrap`}
    >
      <div className="md:w-1/2 w-full xl:h-[598px] lg:h-[540px] h-[400px] bg-slate-400"></div>
      <div className="xl:pr-[11rem] lg:pr-20 md:w-1/2 w-full lg:pl-16 md:px-8 px-4 pb-8">
        <Title className="text-white text-left">
          <span className="text-green_light">Get To Know</span> The Team
        </Title>
        <p className="text-white xl:text-[16px] text-[14px] opacity-[0.65] py-4 leading-[160%]">
          Our abled team consists of experts from across the globe. From Europe
          to Australia to Africa, we bring diversity and a combined experience
          of 20+ years in the Blockchain Industry. We are open to your ideas and
          comments on our implementation and are ever ready to create a solution
          that is sustainable and scalable. We would love to have a conversation
          with you. Head over to our discord to get in touch and be a part of
          the STARKDEFI FAMILY!
        </p>
        <SimpleLink
          text="Connect on Discord"
          className="text-white opacity-[0.85] text-[16px]"
          arrowClass="text-white opacity-[0.85]"
        />
      </div>
    </section>
  );
}

import styles from "./team-card.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function TeamCard({ image, name, ...props }) {
  return (
    <div
      {...props}
      className={`${styles.container} ${props.className} relative xl:max-w-[300px] max-w-[280px] transition-all duration-200 ease-in`}
    >
      <Fade direction="up" triggerOnce>
        <Image
          src={image}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          quality={100}
          alt={name}
        />
        <div className="absolute bg-black bg-opacity-[0.44] bottom-0 left-0 right-0 opacity-0 transition-all duration-200 ease-in">
          <p className="text-white font-CeraPro-Light text-[14px] leading-[160%] p-[10px]">
            {name}
          </p>
        </div>
      </Fade>
    </div>
  );
}

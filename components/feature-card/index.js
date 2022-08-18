import Image from "next/image";
import { SimpleLink } from "../utils";
import styles from "./feature-card.module.css";

export default function FeatureCard({
  Icon,
  title,
  text,
  image,
  link,
  className,
  ...props
}) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <h1 className={styles.title}>
        <Icon /> {title}
      </h1>
      <p className={styles.text}>{text}</p>
      <div className="lg:h-[255px] md:h-[190px] h-[225px]">
        <Image src={image} alt={title} placeholder="blur" />
      </div>
      <SimpleLink
        className={styles.link}
        arrowClass="stroke-green_light"
        text={`${title} on StarkDefi`}
        url={link}
        target="_blank"
      />
    </div>
  );
}

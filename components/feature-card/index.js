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
}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>
        <Icon /> {title}
      </h1>
      <p className={styles.text}>{text}</p>
      <div className="h-[255px]">
        <Image src={image} alt={title} placeholder="blur" />
      </div>
      <SimpleLink
        className={styles.link}
        arroClass="stroke-green_light"
        text={`${title} on StarkDefi`}
        url={link}
      />
    </div>
  );
}

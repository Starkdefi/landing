import styles from "./feature-card2.module.css";

export default function FeatureCard2({
  Icon,
  title,
  text,
  className,
  ...props
}) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <Icon />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

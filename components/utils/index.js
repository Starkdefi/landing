import styles from "./utils.module.css";
import LinkArrow from "../../assets/icons/link-arrow.svg";

export function Title({ children, className }) {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
}

export function Text({ children, className }) {
  return <p className={`${styles.text} ${className}`}>{children}</p>;
}

export function SimpleLink({
  text,
  className,
  arrowClass = "stroke-white",
  url,
  ...props
}) {
  return (
    <a className={`${styles.simple_link} ${className}`} href={url} {...props}>
      {text} <LinkArrow className={arrowClass} />
    </a>
  );
}

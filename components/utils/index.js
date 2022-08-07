import styles from "./utils.module.css";

export function Title({ children, className }) {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
}

export function Text({ children, className }) {
  return <p className={`${styles.text} ${className}`}>{children}</p>;
}

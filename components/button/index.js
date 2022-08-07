import styles from "./button.module.css";

export function Button({
  children,
  onClick,
  className = "",
  type = "regular",
  ...props
}) {
  return (
    <button
      className={`${styles.button} ${styles[type || "regular"]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

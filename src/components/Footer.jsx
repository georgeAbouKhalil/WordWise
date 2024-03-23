import styles from "./Sidebar.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; CopyRight {new Date().getFullYear()} by George Ak.
      </p>
    </footer>
  );
}

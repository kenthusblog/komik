import styles from "../styles/Navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link href="/">
        <a>
          <div className={styles.item}>Home</div>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <div className={styles.item}>About</div>
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <div className={styles.item}>Contact</div>
        </a>
      </Link>
    </div>
  );
}

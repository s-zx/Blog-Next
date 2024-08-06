"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const session = true; // This will be replaced with actual session data
  const isAdmin = true; // This will be replaced with actual admin status

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <Link
          href="/"
          className={`${styles.navContainer} ${
            pathName === "/" && styles.active
          }`}
        >
          Homepage
        </Link>
        <Link
          href="/about"
          className={`${styles.navContainer} ${
            pathName === "/about" && styles.active
          }`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${styles.navContainer} ${
            pathName === "/contact" && styles.active
          }`}
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className={`${styles.navContainer} ${
            pathName === "/blog" && styles.active
          }`}
        >
          Blog
        </Link>
        {session ? (
          <>
            {isAdmin && (
              <Link
                href="/admin"
                className={`${styles.navContainer} ${
                  pathName === "/admin" && styles.active
                }`}
              >
                Admin
              </Link>
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <Link
            href="/login"
            className={`${styles.navContainer} ${
              pathName === "/login" && styles.active
            }`}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

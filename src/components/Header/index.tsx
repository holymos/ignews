import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

import { HiMenu } from "react-icons/hi";
import { Menu } from "../Menu";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="ig.news" />
          </a>
        </Link>

        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>

      <div className={styles.headerContentMobile}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="ig.news" />
          </a>
        </Link>

        <HiMenu size="40px" onClick={handleOpenMenu} />

        <Menu isOpen={isOpen} handleOpenMenu={handleOpenMenu} />
      </div>
    </header>
  );
}

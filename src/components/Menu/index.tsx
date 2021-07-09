import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";

import headerStyles from "../Header/styles.module.scss";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

type MenuProps = {
  isOpen: boolean;
  handleOpenMenu: () => void;
};

export function Menu({ isOpen, handleOpenMenu }: MenuProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleOpenMenu);

    return () => {
      router.events.off("routeChangeComplete", handleOpenMenu);
    };
  }, [router.pathname]);

  return (
    <aside className={`${styles.menu} ${isOpen && styles.menuIsOpen}`}>
      <ActiveLink activeClassName={headerStyles.active} href="/">
        <a>Home</a>
      </ActiveLink>
      <ActiveLink activeClassName={headerStyles.active} href="/posts">
        <a>Posts</a>
      </ActiveLink>

      <SignInButton />
    </aside>
  );
}

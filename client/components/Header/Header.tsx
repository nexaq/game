import Container from "client/components/Container";
import Logo from "client/components/Logo";
import React, { FC, memo, useState } from "react";

import Hamburger from "./components/hamburger";
import Menu from "./components/menu";
import css from "./style.module.pcss";

const Header: FC = () => {
  const [opened, setOpen] = useState(false);
  const openedClassName = opened ? css._opened : "";
  const overlayActiveClassName = opened ? css.overlay_active : "";
  const toggleMenu = () => setOpen(!opened);

  return (
    <>
      <header className={`${css.header} ${openedClassName} header`}>
        <Container>
          <div className={`${css.inner}`}>
            <Logo color={opened ? "secondary" : "primary"} />
            <Hamburger
              className={css.hamburger}
              onClick={toggleMenu}
              active={opened}
            />
          </div>
          <Menu active={opened} />
        </Container>
      </header>
      <div
        className={`${css.overlay} ${overlayActiveClassName}`}
        onClick={toggleMenu}
      />
    </>
  );
};

// используется в Layout так что лучше обернуть в memo()
export default memo(Header);

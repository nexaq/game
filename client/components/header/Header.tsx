import React, {FC, memo, useState} from 'react';
import css from './style.module.pcss';
import Container from "../container";
import Hamburger from "./components/hamburger";
import Logo from "../logo";
import Menu from "./components/menu";

const Header: FC = () => {
    const [opened, setOpen] = useState(false);
    const openedClassName = opened ? css._opened : '';
    const overlayActiveClassName = opened ? css.overlay_active : '';
    const toggleMenu = () => setOpen(!opened);

    return (
        <>
            <header className={`${css.header} ${openedClassName} header`}>
                <Container>
                    <div className={`${css.inner}`}>
                        <Logo color={opened ? 'secondary' : 'primary'}/>
                        <Hamburger
                            className={css.hamburger}
                            onClick={toggleMenu}
                            active={opened}
                        />
                    </div>
                    <Menu active={opened}/>
                </Container>
            </header>
            <div className={`${css.overlay} ${overlayActiveClassName}`} onClick={toggleMenu} />
        </>
    );
};

export default memo(Header);
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.scss';

const Nav = () => {
    const [navItems, setNavItems] = useState([
        {
            id: 0,
            name: "Services",
            path: "/",
            isActive: true,
        },
        {
            id: 1,
            name: "Work",
            path: "/",
            isActive: false,
        },
        {
            id: 2,
            name: "About",
            path: "/",
            isActive: false,
        },
        {
            id: 3,
            name: "Blog",
            path: "/",
            isActive: false,
        },
        {
            id: 4,
            name: "Content",
            path: "/",
            isActive: false,
        },
    ]);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [burgerExpanded, setBurgerExpanded] = useState(false);
    const [transparentBg, setTransparentBg] = useState(true);

    const handleBurger = () => {
        setBurgerExpanded((burgerExpanded) => !burgerExpanded);
    }

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const transparentThreshold = window.innerHeight * 0.8;

        currentScrollPos > transparentThreshold ? setTransparentBg(false) : setTransparentBg(true);
        currentScrollPos > prevScrollPos ? setVisible(false) : setVisible(true);
        setPrevScrollPos(currentScrollPos);
    };

    const setNavItemActive = (index : number) => {
        setNavItems([
            ...navItems.map((item) => {
                item.id === index ? (item.isActive = true) : (item.isActive = false);
                return item;
            }),
        ]);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <>
            <nav className={`${styles.nav} ${visible ? "slide-in-down" : "slide-out-up"} ${transparentBg ? "" : styles.nav__white_bg}`}>
                <div className={styles.nav__wrapper}>
                    <img className={styles.nav__logo} src="./img/icon/logo.png" alt="" />
                    <div onClick={handleBurger} className={`${styles.nav__burger} ${burgerExpanded ? styles.nav__burger_expanded : ""}`}>
                        <div className={`${styles.nav__burger_line} ${styles.nav__burger_line__1}`}></div>
                        <div className={`${styles.nav__burger_line} ${styles.nav__burger_line__2}`}></div>
                        <div className={`${styles.nav__burger_line} ${styles.nav__burger_line__3}`}></div>
                    </div>
                    <ul className={styles.nav__nav}>
                        {navItems.map((item, index) => (
                            <li className={`${styles.nav__nav_item} ${item.isActive ? styles.nav__nav_item_active : "" }`} key={index}>
                                <Link onClick={() => setNavItemActive(index)} to={item.path}> {item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className={`${styles.nav__mob_nav} ${burgerExpanded ? styles.nav__mob_nav_show : "hide"}`}>
                        {navItems.map((item, index) => (
                            <li className={`${styles.nav__mob_nav_item} ${item.isActive ? "active" : "" }`} key={index}>
                                <Link onClick={() => setNavItemActive(index)} to={item.path}> {item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;

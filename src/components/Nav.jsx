import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    const handleBurger = () => {
        setBurgerExpanded((burgerExpanded) => !burgerExpanded);
    }

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        currentScrollPos > prevScrollPos ? setVisible(false) : setVisible(true);
        setPrevScrollPos(currentScrollPos);
    };

    const setNavItemActive = (index) => {
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

    useEffect(() => {
        burgerExpanded ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    }, [burgerExpanded]);

    return (
        <>
            <nav className={`nav ${visible ? "slide-in-down" : "slide-out-up"}`}>
                <div className="nav__wrapper">
                    <img className="nav__logo" src="./logo.png" alt="" />
                    <div onClick={handleBurger} className={`nav__burger ${burgerExpanded ? "expanded" : ""}`}>
                        <div className="nav__burger-line nav__burger-line--1"></div>
                        <div className="nav__burger-line nav__burger-line--2"></div>
                        <div className="nav__burger-line nav__burger-line--3"></div>
                    </div>
                    <ul className="nav__nav">
                        {navItems.map((item, index) => (
                            <li className={`nav__nav-item ${item.isActive ? "active" : "" }`} key={index}>
                                <Link onClick={() => setNavItemActive(index)} to={item.path}> {item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className={`nav__mob-nav ${burgerExpanded ? "show" : "hide"}`}>
                        {navItems.map((item, index) => (
                            <li className={`nav__mob-nav-item ${item.isActive ? "active" : "" }`} key={index}>
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

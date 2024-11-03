"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import TopNav from "../TopNav/TopNav";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import Logo from "../Logo/Logo";

const navItems = [
  { text: "Features", href: "/#features" },
  { text: "About Us", href: "/#about" },
  { text: "Pricing", href: "/#pricing" },
  { text: "Contact", href: "/#contact" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLElement | null>(null);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const topNav = document.querySelector(".topNav") as HTMLElement;
      const nav = navRef.current;

      if (topNav && nav) {
        const topNavHeight = topNav.offsetHeight;
        const navHeight = nav.offsetHeight;

        setNavHeight(navHeight);

        if (window.scrollY > topNavHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    // IntersectionObserver to track section visibility
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section based on section ID
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const pathname = usePathname();

  return (
    <>
      <TopNav />
      <div
        style={{
          height: isFixed ? `${navHeight}px` : 0,
          backgroundColor: "var(--tan)",
        }}
      />
      <header
        className={`${styles.header} ${isFixed ? styles.fixed : ""}`}
        ref={navRef}
      >
        <nav className={styles.navbar}>
          <div className={styles.mobileLogo}>
            <Logo />
          </div>
          <div className={styles.desktopLogo}>
            <Logo />
          </div>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : `${styles.navMenu} ${styles.active}`
            }
            onClick={openMenu}
          >
            <div className={styles.navBox}>
              {/* <li className={styles.navItem} onClick={() => setIsOpen(false)}>
                <Link href='/'>{pathname === "/" ? <>Home</> : "Home"}</Link>
              </li> */}
              {navItems.map((navItem, index) => (
                <li
                  key={index}
                  className={`${styles.navItem} ${
                    activeSection === navItem.href.substring(2)
                      ? styles.active
                      : ""
                  }`} // Add the 'active' class when the section is visible
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={navItem.href}>
                    {pathname.includes(navItem.href) && (
                      <>
                        <Arrow className={styles.icon} />
                        {navItem.text}
                      </>
                    )}
                    {!pathname.includes(navItem.href) && navItem.text}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
          <div className={styles.btnContainer}>
            <Button
              href='/#schedule'
              text='Schedule discovery call'
              btnType='primaryNav'
            />
          </div>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : `${styles.hamburger} ${styles.active}`
            }
            onClick={openMenu}
          >
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
          </span>
        </nav>
      </header>
    </>
  );
}

export default Nav;

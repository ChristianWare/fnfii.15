"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import Logo from "../Logo/Logo";
import { gsap } from "gsap";

const navItems = [
  { text: "About Us", href: "/#about" },
  { text: "Features", href: "/#features" },
  { text: "Pricing", href: "/#pricing" },
  { text: "Contact", href: "/#contact" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [navHeight, setNavHeight] = useState(0);

  const navRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLUListElement | null>(null);

  // We'll create a single timeline for animating the navItem elements
  const tl = useRef<gsap.core.Timeline | null>(null);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Sticky nav + active section observer
  useEffect(() => {
    const handleScroll = () => {
      const topNav = document.querySelector(".topNav") as HTMLElement;
      const nav = navRef.current;

      if (topNav && nav) {
        const topNavHeight = topNav.offsetHeight;
        const currentNavHeight = nav.offsetHeight;

        setNavHeight(currentNavHeight);

        if (window.scrollY > topNavHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    // Observe sections to highlight current nav link
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    if (!tl.current) {
      // Set initial state for nav items
      gsap.set(".navItem", { y: 75, opacity: 0 });

      // Build a paused timeline
      tl.current = gsap.timeline({ paused: true });

      // Animate nav items in
      tl.current.to(".navItem", {
        // Wait 0.5s before animating text
        delay: 0.2,
        y: 0,
        opacity: 1,
        stagger: 0.3, // each item starts 0.3s after the previous
        duration: 0.8, // each item fades in over 0.8s
        ease: "power4.out",
      });
    }
  }, []);

  // Toggle timeline and menu .active class
  useEffect(() => {
    const menuEl = containerRef.current; // <ul> with .navMenu

    if (!tl.current || !menuEl) return;

    if (isOpen) {
      // Slide menu in (CSS) via .active
      menuEl.classList.add(styles.active);
      // Animate text in
      tl.current.play(0);
    } else {
      // Animate text out (reverse)
      tl.current.reverse();

      // After reversed text completes, remove .active
      tl.current.eventCallback("onReverseComplete", () => {
        menuEl.classList.remove(styles.active);
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Spacer to offset the fixed nav height */}
      <div style={{ height: isFixed ? `${navHeight}px` : 0 }} />

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

          <ul ref={containerRef} className={`${styles.navMenu} navMenu`}>
            <div className={styles.navBox}>
              {navItems.map((navItem, index) => (
                <li
                  key={index}
                  className={`
                    ${styles.navItem} 
                    navItem 
                    ${
                      activeSection === navItem.href.substring(2)
                        ? styles.active
                        : ""
                    }
                  `.replace(/\s+/g, " ")}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={navItem.href} className={styles.navItem}>
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
              !isOpen
                ? styles.hamburger
                : `${styles.hamburger} ${styles.active}`
            }
            onClick={openMenu}
          >
            {isOpen ? "Close" : "Menu"}
          </span>
        </nav>
      </header>
    </>
  );
};

export default Nav;

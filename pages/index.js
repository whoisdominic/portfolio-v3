import React, { useState } from "react";
import Typist from "react-typist";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTransition, animated } from "react-spring";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
export default function Home() {
  const mobile = useMediaQuery("(min-width:600px)");
  const [introDone, setIntroDone] = useState(false);
  const pageTransition = () => {
    setIntroDone(true);
  };
  const [show, set] = useState(false);
  const transitions = useTransition(show, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div className={styles.container}>
      <Nav />
      <Head>
        <title>Dominic Cobb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Typist
          cursor={{
            show: true,
            blink: true,
            element: "|",
            hideWhenDone: true,
            hideWhenDoneDelay: 1000,
          }}
          className={styles.typing}
          onTypingDone={pageTransition}
        >
          My name is Dominic.
          <Typist.Delay ms={750} />
          <Typist.Backspace count={19} delay={750} />
          I'm a Software Engineer.
          <Typist.Delay ms={1500} />
          <Typist.Backspace count={25} delay={750} />
          What would you like to see?
          <Typist.Delay ms={1000} />
        </Typist>
        {introDone ? (
          <></>
        ) : (
          <div onClick={setIntroDone}>
            <HighlightOffIcon fontSize="large" />
          </div>
        )}
        {introDone ? (
          <>
            <div className={styles.miniFlex}>
              <ul>
                <Link href="/about">
                  <li
                    className={`${styles.scaleInCenter} ${styles.hoverAbout}`}
                  >
                    About
                  </li>
                </Link>
                <Link href="/resume">
                  <li
                    className={`${styles.scaleInCenter} ${styles.hoverResume}`}
                  >
                    Resume
                  </li>
                </Link>
                <Link href="/portfolio">
                  <li
                    className={`${styles.scaleInCenter} ${styles.hoverPortfolio}`}
                  >
                    Portfolio
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    className={`${styles.scaleInCenter} ${styles.hoverContact}`}
                  >
                    Contact
                  </li>
                </Link>
                <Link href="/everything">
                  <li
                    className={`${styles.scaleInCenter} ${styles.hoverEverything}`}
                  >
                    Everything
                  </li>
                </Link>
              </ul>
            </div>
          </>
        ) : (
          <> </>
        )}
      </main>
    </div>
  );
}

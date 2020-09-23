import React, { useState } from "react";
import Typist from "react-typist";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Home() {
  const mobile = useMediaQuery("(min-width:600px)");
  const [introDone, setIntroDone] = useState(false);
  const pageTransition = () => {
    setIntroDone(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Dominic Cobb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typist className={styles.typing} onTypingDone={pageTransition}>
          My name is Dominic.
          <Typist.Delay ms={750} />
          <Typist.Backspace count={19} delay={750} />
          I'm a Software Engineer.
          <Typist.Delay ms={2000} />
          <Typist.Backspace count={25} delay={750} />
          What would you like to see?
        </Typist>
        {introDone ? (
          <>
            <div className={styles.miniFlex}>
              <ul>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Everything</li>
              </ul>
            </div>
          </>
        ) : (
          <> </>
        )}
      </main>

      <footer className={styles.footer}>
        <a href="tel:2064896538">
          {mobile ? <PhoneIcon fontSize="large" /> : <PhoneIcon />}
        </a>
        <span />
        <a href="mailto: me@dominiccobb.dev">
          {mobile ? <EmailIcon fontSize="large" /> : <EmailIcon />}
        </a>
        <span />
        <a href="http://www.github.com/whoisdominic" target="_blank">
          {mobile ? <GitHubIcon fontSize="large" /> : <GitHubIcon />}
        </a>
        <span />
        <a href="https://www.linkedin.com/in/dominiccobb/" target="_blank">
          {mobile ? <LinkedInIcon fontSize="large" /> : <LinkedInIcon />}
        </a>
      </footer>
    </div>
  );
}

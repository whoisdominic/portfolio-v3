import React, { useState } from "react";
import Typist from "react-typist";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Resume.module.css";
import Nav from "./components/nav.js";
import Button from "@material-ui/core/Button";

export default function Resume(props) {
  return (
    <>
      <div className={styles.container}>
        <a
          className={styles.delink}
          href={"./DominicCobbResumeSeptember20.pdf"}
          download
        >
          <Button variant="outlined" color="inherit">
            Download my resume!
          </Button>
        </a>
        <Nav />
        <Head>
          <title>Dominic Cobb</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.resumeCont}>
          <img
            src={"./img/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg"}
            className={styles.img}
          />
          <div className={styles.resumeInfo}>
            <h2>EDUCATION & CERTIFICATIONS</h2>
            <p>
              <span className={styles.under}>
                General Assembly Software Engineering Immersive Remote
              </span>
              <br />
              <br />
              Learned industry best practices and practical software development
              standards with a focus on HTML, CSS, JavaScript, React, Node,
              Rails, SQL, data structures, and algorithms. Applied knowledge
              gained in the classroom to build 4 full-stack web applications,
              including group projects utilizing Agile and Scrum methodologies,
              VUE, jQuery, PostgreSQL, MongoDB, Python, Django, SASS, and
              Materialize.
            </p>
            <div className="work">
              <h2>Cream Capital - Android Developer (Contract)</h2>
              <p>
                As part of a four-person development team, I collaborated with
                senior engineers to incorporate changes to the Android ATM
                application with a focus on developing integration to ensure
                compatibility between systems and hardware components; led
                application testing procedures. Displayed working knowledge of
                Expo, Android & Kotlin
              </p>
              <ul>
                <li>
                  Designed and tested the application, validating that the
                  virtual ATM system functioned properly in the live production
                  store as well as in physical convenience-store ATM machines.
                </li>
                <li>
                  Integrated advanced USB serial modules to handle 500 bills in
                  the machine and developed the ID scanner that ties a user’s ID
                  card to their account to improve ease of access and enhance
                  overall usability.
                </li>
                <li>
                  Assisted in outsourcing and managing 6 Android developers by
                  creating project roadmaps outlining hardware integrations,
                  server infrastructure, user experience, and automated testing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

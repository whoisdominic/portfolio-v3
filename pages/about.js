import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "./components/nav.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function About(props) {
  const mobile = useMediaQuery("(min-width:600px)");

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <Head>
          <title>Dominic Cobb</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.pageTitle}>Dominic Cobb</h1>
        <main className={styles.grid}>
          <div className={styles.aboutCont}>
            <img
              src="./img/photoOfMe.jpeg"
              className={styles.myPhoto}
              alt="Dominic Cobb"
            />
            <div className={styles.aboutInfo}>
              <p>
                I am Software engineer with a proven ability to adapt and
                collaborate in rapidly changing work environments and team
                compositions. I am a graduate of General Assembly's Software
                Engineering Immersive. Wherein I learned Javascript, React,
                Node, and Express.
              </p>
              <hr />
              <p>
                Born and raised in Bellevue Washington, a stones throw away from
                a little company called Microsoft. I've always been facinated
                with technology and how it can change the world! Whether you
                need a beatiful website, a powerfull Api, or a mobile app made
                for your business. I am more than up to the task!
              </p>

              {mobile ? (
                <>
                  <div className={styles.iconCont}></div>
                </>
              ) : (
                <hr />
              )}
            </div>
          </div>
          <div className={styles.aboutIcons}>
            <img className={styles.aboutImg} src="./img/react.png" />
            <img className={styles.aboutImg} src="./img/node.png" />
            <img className={styles.aboutImg} src="./img/apple.png" />
            <img className={styles.aboutImg} src="./img/android.png" />
            <img className={styles.aboutImg} src="./img/mongo.png" />
            <img className={styles.aboutImg} src="./img/postgres.png" />
          </div>
          <div className={styles.skillCont}>
            <div className={`${styles.aboutSkill} ${styles.left}`}>
              <h2 className={styles.skillTitle}>Frameworks + Libraries</h2>
              <br />
              <ul>
                <li>React</li>
                <li>React-Native</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>NextJs</li>
                <li>Expo</li>
                <li>jQuery</li>
                <li>Redux</li>
                <li>Material</li>
                <li>Reanimated</li>
              </ul>
              <hr />
            </div>

            <div className={styles.aboutSkill}>
              <h2 className={styles.skillTitle}>Languages</h2>
              <br />
              <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Python</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Kotlin</li>
              </ul>
            </div>
            <div className={styles.aboutSkill}>
              <h2 className={styles.skillTitle}>Database/API</h2>
              <br />
              <ul>
                <li>MongoDb</li>
                <li>Postgresql</li>
                <li>GraphQL</li>
                <li>Firebase</li>
                <li>DynamoDB</li>
              </ul>
            </div>
            <div className={`${styles.aboutSkill} ${styles.right}`}>
              <h2 className={styles.skillTitle}>Misc</h2>
              <br />
              <ul>
                <li>GIT</li>
                <li>Heroku</li>
                <li>AWS</li>
                <li>Digital Ocean</li>
                <li>Linux</li>
                <li>REST-API</li>
                <li>Babel</li>
                <li>X-code</li>
                <li>Wordpress</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

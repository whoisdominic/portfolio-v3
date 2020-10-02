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
        <main className={styles.main}>
          <div className={styles.aboutCont}>
            <img
              src="./img/photoOfMe.jpeg"
              className={styles.myPhoto}
              alt="Dominic Cobb"
            />
            <div className={styles.aboutInfo}>
              <p>
                I am a Software engineer with a proven ability to adapt and
                collaborate in rapidly changing work environments and team
                compositions. I am a graduate of General Assembly's Software
                Engineering Immersive. Wherein I learned Javascript, React,
                Node, and Express.
              </p>
              <hr />
              <p>
                Born and raised in Bellevue Washington, a stone's throw away
                from a little company called Microsoft. I've always been
                fascinated with technology and how it can change the world!
                Whether you need a beautiful website, a powerful API, or a
                mobile app made for your business. I am more than up to the
                task!
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
                <h4 className={styles.skills}>React</h4>
                <h4 className={styles.skills}>React-Native</h4>
                <h4 className={styles.skills}>Nodejs</h4>
                <h4 className={styles.skills}>Express</h4>
                <h4 className={styles.skills}>Django</h4>
                <h4 className={styles.skills}>NextJs</h4>
                <h4 className={styles.skills}>Expo</h4>
                <h4 className={styles.skills}>jQuery</h4>
                <h4 className={styles.skills}>Redux</h4>
                <h4 className={styles.skills}>Material</h4>
                <h4 className={styles.skills}>Reanimated</h4>
              </ul>
              <hr />
            </div>
            <hr />
            <div className={styles.aboutSkill}>
              <h2 className={styles.skillTitle}>Languages</h2>
              <br />
              <ul>
                <h4 className={styles.skills}>HTML</h4>
                <h4 className={styles.skills}>Javascript</h4>
                <h4 className={styles.skills}>Typescript</h4>
                <h4 className={styles.skills}>Python</h4>
                <h4 className={styles.skills}>CSS</h4>
                <h4 className={styles.skills}>Sass</h4>
                <h4 className={styles.skills}>Kotlin</h4>
                <h4 className={styles.skills}>Swift</h4>
              </ul>
            </div>
            <hr />

            <div className={styles.aboutSkill}>
              <h2 className={styles.skillTitle}>Database/API</h2>
              <br />
              <h4 className={styles.skills}>MongoDb</h4>
              <h4 className={styles.skills}>Postgresql</h4>
              <h4 className={styles.skills}>GraphQL</h4>
              <h4 className={styles.skills}>Firebase</h4>
              <h4 className={styles.skills}>DynamoDB</h4>
            </div>
            <hr />

            <div className={`${styles.aboutSkill} ${styles.right}`}>
              <h2 className={styles.skillTitle}>Misc</h2>
              <br />
              <h4 className={styles.skills}>GIT</h4>
              <h4 className={styles.skills}>Heroku</h4>
              <h4 className={styles.skills}>AWS</h4>
              <h4 className={styles.skills}>Digital Ocean</h4>
              <h4 className={styles.skills}>Linux</h4>
              <h4 className={styles.skills}>REST-API</h4>
              <h4 className={styles.skills}>Babel</h4>
              <h4 className={styles.skills}>X-code</h4>
              <h4 className={styles.skills}>Wordpress</h4>
            </div>
            <hr />
          </div>
          {/* <div className={styles.certCont}>
            <h2 className={styles.skillTitle}>Certifications</h2>
            <div className={styles.certItem}>
              <img className={styles.certImage} src="./img/GAlogo.png" />
              <div className={styles.certDescription}>
                <p className={styles.certTxt}>Software Engineering Immersive</p>
                <p className={styles.certTxt}>500+ Hours Bootcamp Structure</p>
              </div>
            </div>
          </div> */}
        </main>
      </div>
    </>
  );
}

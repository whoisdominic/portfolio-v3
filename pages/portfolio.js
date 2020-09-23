import React, { useState } from "react";
import Typist from "react-typist";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Port.module.css";
import Nav from "./components/nav.js";
import GitHubIcon from "@material-ui/icons/GitHub";

// Data
const projects = [
  {
    name: "Habit Hunter",
    description:
      "A React Native application that Allows the user to set monthly/weekly/daily habits and invite friends to help keep them on track. Built with Expo to access to device capabilities (e.g. contacts, location, notifications, sensors, haptics, etc.), and built purposefully to be app-store-ready with binaries along with handles certificates.",
    images: ["./img/habit.png"],
    link: "",
    gitHub: "https://github.com/whoisdominic/habitHunter",
    techused: ["React-Native", "Express", "Twilio"],
    color: "color-habit",
  },
  {
    name: "Goat Ranker",
    description:
      "Allows users to listen to music and vote for who is the greatest of all time in different genre categories with React. Designed mobile-first user experience with Material UI to allow the user to select between countless categories that dynamically integrate Artists in each category through the Spotify API",
    images: ["./img/goatrotato.png"],
    link: "",
    gitHub: "https://github.com/whoisdominic/goat-ranker-web",
    techused: ["React", "Materialize", "Scss", "Express", "MongoDB", "Netlify"],
    color: "color-goat",
  },
];

export default function Portfolio(props) {
  const [current, setCurrent] = useState(0);

  const handleProjectChange = (e) => {
    setCurrent(e);
  };

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <Head>
          <title>Dominic Cobb</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.projCont}>
            <h1
              className={`${styles.colorHabit} ${styles.projTitle}`}
              onClick={() => handleProjectChange(0)}
            >
              Habit Hunter
            </h1>
            <h1
              className={`${styles.colorGoat} ${styles.projTitle}`}
              onClick={() => handleProjectChange(1)}
            >
              Goat Ranker
            </h1>
          </div>
          <div className={styles.projCont}>
            <img className={styles.projImg} src={projects[current].images[0]} />
            <div className={styles.projInfoCont}>
              <h2 className={styles.infoTitle}>Description</h2>
              <div className={styles.gitHubCont}>
                <h3 className={styles.githubTxt}>Checkout the code!</h3>
                <a href={`${projects[current].gitHub}`} target="_blank">
                  <GitHubIcon fontSize="large" />
                </a>
              </div>
              <p className={styles.projDesc}>{projects[current].description}</p>
              <h2 className={styles.infoTitle}>Tech Used</h2>
              <ul>
                {projects[current].techused.map((item) => {
                  return <li className={styles.projItem}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

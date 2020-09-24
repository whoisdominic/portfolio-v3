import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Everything.module.css";
import Nav from "./components/nav.js";
import About from "./about.js";
import Portfolio from "./portfolio";
import Resume from "./resume";

export default function Everything(props) {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <Head>
          <title>Dominic Cobb</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <About />
          <Portfolio />
          <Resume />
        </main>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Typist from "react-typist";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";

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
          <h1>This is the Everything Page</h1>
        </main>
      </div>
    </>
  );
}

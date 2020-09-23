import React, { useState } from "react";
import Typist from "react-typist";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Nav from "./components/nav.js";
import Footer from "./components/footer.js";

export default function Resume(props) {
  return (
    <>
      <div className={styles.container}>
        <Nav />

        <Head>
          <title>Dominic Cobb</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>This is the Resume Page</h1>
        </main>
      </div>
    </>
  );
}

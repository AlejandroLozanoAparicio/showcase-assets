import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Showcase your assets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
      <footer></footer>
    </div>
  );
}

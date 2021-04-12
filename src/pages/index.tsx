import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Inspiration from '../components/Inspiration'

import { MenuProvider } from '../contexts/MenuContext'

import styles from '../styles/pages/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GM Nutrition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuProvider>
        <Header />

        <Menu />
      </MenuProvider>

      <div id="home" className={styles.homeContainer}>
        <div className={styles.bodyHomeContainer}>
          <div className={styles.titleContainer}>
            <span>Mais que uma marca,<br />um conceito, um ideal!</span>
          </div>

          <div className={styles.subTitleContainer}>
            <span>Entre nessa missão conosco! Venha para mudar e ficar!<br />Para realmente fazer a diferença!</span>
          </div>

          <div className={styles.iconsBodyContainer}>
            <img src="/icons/email.svg" alt="email"/>
            <img src="/icons/insta.svg" alt="insta"/>
            <img src="/icons/linkedin.svg" alt="lkdin"/>
          </div>
        </div>
      </div>

      <div className={styles.founderContainer}>
        <div className={styles.founderContainerData}>
          <span className={styles.founderUpTitle}>uma palavra do fundador</span>
          <span className={styles.founderTitle}>Lorem ipsum dolor<br />sit amet, consectur.</span>
          <span className={styles.founderWord}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </span>

          <button className={styles.founderButton}>nossa marca</button>
        </div>
        <div className={styles.founderContainerPhoto}>
          <img src="founder.png" alt="founder"/>
        </div>
      </div>

      <div className={styles.inspirationsContainer}>
        <Inspiration />

        <Inspiration />

        <Inspiration />
      </div>
    </div>
  )
}

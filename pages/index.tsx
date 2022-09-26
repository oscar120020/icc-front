import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Intellisys Coding Challenge</title>
        <meta name="description" content="Intellisys Coding Challenge landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Intellisys Coding Challenge</h1>
    </div>
  )
}

export default Home

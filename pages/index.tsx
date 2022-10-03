import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultLayout } from '../components/layouts'
import { Navbar } from '../components/ui/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Intellisys Coding Challenge</title>
    //     <meta name="description" content="Intellisys Coding Challenge landing page" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <Navbar/>

    //   <h1>Intellisys Coding Challenge</h1>
    // </div>
    <DefaultLayout title='Intellisys Coding Challenge' pageDescription='Intellisys Coding Challenge' >
      <h1>Hola</h1>
    </DefaultLayout>
  )
}

export default Home

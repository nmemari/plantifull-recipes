import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Tutorial.module.css'
import Navbar from '@/components/Navbar'

export default function Tutorial() {
  return (
    <>
      <Head>
        <title>Tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <section>
          <div className={styles.tutimgs}>
          <Image className={styles.tuteimg1} src="/tutorialpage/tuteimg1.png" width={310} height={631}/>
          <Image className={styles.tuteimg2} src="/tutorialpage/tuteimg2.png" width={310} height={631}/>
          <Image className={styles.tuteimg3} src="/tutorialpage/tuteimg3.png" width={310} height={631}/>            
          </div>          
        </section>
      </main>
    </>
  )
}

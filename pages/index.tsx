import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <Head>
      <title>ohomenokotoba</title>
      <link rel="icon" href=""/>
    </Head>
    <main className={styles.container}>
      <h1>Hello Next.js</h1>
      <p className="text-3xl text-red-500 font-bold">Hello Tailwind</p>
    </main>
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home title="ohomenokotoba">
     <div>
       <h1>Hello Next.js</h1>
       <p className="text-sm text-red-500 font-bold">Hello Tailwind</p>
     </div>
    </Layout>
  )
}

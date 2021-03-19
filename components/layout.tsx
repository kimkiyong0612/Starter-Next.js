import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'


export default function Layout({children,home,title}){
    return(
        <div className={styles.container}>
            <Head>
                <link rel="icon" href=""/>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>{children}</main>
            {!home &&(
                <div>
                    <Link href="/">
                        <a>HOME</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
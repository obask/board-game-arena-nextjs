import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { getRequestCookie } from '../lib/getRequestCookie'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const user = await getRequestCookie()

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/blog">Dashboard</Link>
        <Link href="/login">Login</Link>
        <p>
          Get started by editing user = {JSON.stringify(user)} &nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

    </main>
  )
}

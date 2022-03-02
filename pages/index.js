import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Head>
        <title>Bishuddho Bazar Online Shop</title>
        <meta name="description" content="Online shop for fresh foods" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Navbar></Navbar>
    </div>
  )
}

import Head from 'next/head'
import Categories from '../components/Categories';
import Choose from '../components/Choose';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Products from '../components/Products';

export default function Home() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="container-fluid p-0">
      <Head>
        <title>Bishuddho Bazar Online Shop</title>
        <meta name="description" content="Online shop for fresh foods" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Navbar></Navbar>
      <Header expiryTimestamp={time}></Header>
      <Categories></Categories>
      <Products></Products>
      <Choose></Choose>
    </div>
  )
}

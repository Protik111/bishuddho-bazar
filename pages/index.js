import Head from 'next/head'
import Categories from '../components/Categories';
import Choose from '../components/Choose';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import axios from 'axios';

export default function Home({ products }) {
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
      <Products products={products}></Products>
      <Choose></Choose>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3000/api/product');
  return {
    props: {
        products: res.data
    }
  }
}

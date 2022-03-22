import Head from 'next/head'
import Categories from '../components/Categories';
import Choose from '../components/Choose';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import CartModal from '../components/CartModal';
import { StoreContext } from '../utils/context';
import setAuthToken from '../utils/setAuthToken';
import GlobalCart from '../components/GlobalCart';

export default function Home({ products }) {
  const { state, dispatch } = useContext(StoreContext);
  const { showCart } = state;

  const loadUser = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/user/auth');
      dispatch({ type: 'LOAD_USER', payload: data })
    } catch (error) {
      dispatch({ type: 'LOAD_USER_FAIL' })
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      loadUser();
    }
  }, [])

  const handleCart = () => {
    dispatch({ type: 'EDIT_SHOW_MODAL', payload: !showCart })
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="container-fluid p-0">
      <Head>
        <title>Bishuddho Bazar Online Shop</title>
        <meta name="description" content="Online shop for fresh foods" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      {showCart && <CartModal ></CartModal>}
      <Navbar handleCart={handleCart}></Navbar>
      {!showCart && <GlobalCart></GlobalCart>}
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

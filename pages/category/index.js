import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar.jsx';
import ProductStyle from '../../components/ProductStyle.jsx';
import { StoreContext } from '../../utils/context.js';
import setAuthToken from '../../utils/setAuthToken.js';
const Index = ({ category }) => {
    const { dispatch } = useContext(StoreContext);
    const loadUser = async () => {
        try {
            const { data } = await axios.get('https://bishuddho-bazar.herokuapp.com/api/user/auth');
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
    }, [loadUser])
    return (
        <div>
            <Navbar search={false}></Navbar>
            <div className="row d-flex justify-content-center">
                {
                    category.length > 0 ? category.map(item => <ProductStyle item={item} key={item. _id}></ProductStyle>) : (<div className="d-flex justify-content-center mt-5">
                        <h2 style={{color: 'red'}}>Oops! There Is No Product In This Category.</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Index;

export async function getServerSideProps({ query }) {
    // console.log('params from hi category', query.keyword);
    const { data } = await axios.get(`https://bishuddho-bazar.herokuapp.com/api/product/category?category=${query.keyword}`)
    return {
        props: {
            category: data
        }
    }
}
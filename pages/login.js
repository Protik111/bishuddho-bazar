import React from 'react';
import Navbar from '../components/Navbar';

const login = () => {
    return (
        <div className="container-fluid p-0">
            <Navbar search={false}></Navbar>
        </div>
    );
};

export default login;
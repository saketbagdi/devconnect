import React from 'react';
import { Link } from 'react-router-dom';

const NotFound=()=>(
    <div style={{textAlign: 'center', padding:'40px'}}>
        <h1>404-Page NOT Found</h1>
        <p>OOps! This page doesn't exist.</p>
        <Link to="/">Go back home</Link>
    </div>
);
export default NotFound;
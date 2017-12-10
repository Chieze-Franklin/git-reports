import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <div className="container-fluid">
        <div className="container center">
        <h1>404 NOT FOUND</h1>
        <p>Oops. Seems like we can't find what you are looking for!</p>
        <Link to="/">HOME</Link>
        </div>
    </div>
);

export default NotFound;
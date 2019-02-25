import React from 'react';
import { Link } from 'react-router-dom';

export default ( { currentUser, logout } ) => {
    const welcome = currentUser ? (
        <div>
            <h1>Welcome {currentUser.username }</h1>
            <button onClick= { logout }> Sign Out </button>
        </div>
    ) : (
        <div>
            <Link to="/login"> Log In </Link>
            <Link to="/signup"> Sign Up </Link>
        </div>
    );

    return (
        <div className="greeting">
            { welcome }
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';

const dropdown = ({isOpen , toggle}) => {
    return (
        <div>
            <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-gray-200' : 'hidden' } onClick={toggle}>
            <Link className="p-4" to='/'>Home</Link>
                <Link className="p-4" to='/'>International</Link>
                <Link className="p-4" to='/'>Bangladesh</Link>
                <Link className="p-4" to='/'>Sports</Link>
                <Link className="p-4" to='/'>User</Link>
            </div>
        </div>
    );
};

export default dropdown;
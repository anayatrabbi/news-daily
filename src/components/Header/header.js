import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = ({toggle}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsAdmin(data)
            })
    }, [loggedInUser.email])
    console.log(loggedInUser.email)
    console.log(isAdmin)
    return (
        <div>
            <nav className="flex justify-between item-center h-16 bg-gray-600 text-white relative pt-4">
                <Link to='/' className='pl-8'></Link>
                <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <div className="pr-4 md:block hidden">
                <Link className="p-4" to='/'>Home</Link>
                <Link className="p-4" to='/'>International</Link>
                <Link className="p-4" to='/'>Bangladesh</Link>
                <Link className="p-4" to='/'>Sports</Link>
                <Link className="p-4" to='/'>User</Link>
                {
                    isAdmin &&
                    <Link className="p-4" to='/dashboard'>DashBoard</Link>
                }
                <Link className="p-4" to='/login'>Login</Link>
                
            </div>
            </nav>
        </div>
    );
};

export default Header;
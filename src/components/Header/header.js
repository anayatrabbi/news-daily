import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = ({toggle}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        fetch('https://mighty-plains-92386.herokuapp.com/isAdmin', {
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

    // useEffect(()=>{
    //     window.onscroll = function(){
    //         myFunction();
    //     }

    //     var navbar = document.getElementById("navbar")
    //     var sticky = navbar.offsetTop;

    //     function myFunction(){
    //         if(window.pageXOffset >= sticky){
    //             navbar.classList.add("sticky")
    //         }
    //         else{
    //             navbar.classList.remove("sticky");
    //         }
    //     }
    // })
    console.log(loggedInUser.email)
    console.log(isAdmin)
    return (
        <div>
            <nav id="navbar" className="flex justify-between item-center h-16 px-1 md:px-12 mb-4 bg-white text-white  pt-4">
                <div>
                <Link to='/' className='pl-8 text-3xl '><span className="text-black">News</span> <span className="text-blue-600">Daily</span></Link>
                </div>
                <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
                <div className="pr-4 md:block hidden">
                    <Link className="p-4 text-black font-bold hover:text-blue-600" to='/'>Home</Link>
                    <Link className="p-4 text-black font-bold hover:text-blue-600" to='/'>International</Link>
                    <Link className="p-4 text-black font-bold hover:text-blue-600" to='/'>Bangladesh</Link>
                    <Link className="p-4 text-black font-bold hover:text-blue-600" to='/'>Sports</Link>
                    <Link className="p-4 text-black font-bold hover:text-blue-600" to='/login'>Login</Link>
                    {
                        isAdmin &&
                        <Link className="p-4 text-black font-bold hover:text-blue-600" to='/dashboard'>DashBoard</Link>
                    }  
                    
                </div>
            </nav>
        </div>
    );
};

export default Header;

import React, { useEffect, useState } from 'react';
import Header from "../Header/header";
import SideBar from "../Sidebar/sidebar";
import News from '../News/news';
import Footer from '../Footer/footer';
import Dropdown from '../Dropdown/dropdown';
const Home = () => {

    //this state is managing responsive design
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        const hideMenu = () => {
            if(window.innerWidth > 768 && isOpen){
                setIsOpen(false);
                console.log('i resized');
            }
        };
        window.addEventListener('resize', hideMenu);
        return () =>{
            window.removeEventListener('resize', hideMenu);
        };
    })


    return (
        <div className="container">
            <Header toggle={toggle}></Header>
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;

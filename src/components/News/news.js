import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar';
import NewsCart from '../NewsCart/NewsCart'
import './news.css'

const News = () => {

    const [news , setNews] = useState([])
 
    useEffect(()=>{
        fetch('https://mighty-plains-92386.herokuapp.com/news')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    console.log(news)
    return (
        <div>
            <div id="headerSection" className="headerSection relative">
                <img className="object-cover h-72  w-full" src="https://media-eng.dhakatribune.com/uploads/2020/12/f7111b76-b5cd-4772-bb27-ce39a8a63be4-1608058226953.jpg" alt="Nature" style={{width:'100%'}}/>
                <div className="text-block absolute bottom-16 md:bottom-30 md:left-24 ">
                    {/* <h4 className="bg-blue-600 rounded-md w-auto">Bangladesh</h4> */}
                    <h4 className="md:text-5xl text-3xl text-gray-300">50 years of Bangladesh: ‘Basket case’ to ‘development miracle’</h4>
                    <p  className="md:text-xl text-gray-300 pt-5 pb-2">Brandings by western media are usually based on a superficial understanding of the enormous changes that have taken place in Bangladesh over the course of the last five decades, says CPD Distinguished Fellow Professor Rounaq Jahan</p>
                    <a className="bg-blue-600 rounded-md w-auto text-white p-1" href="#"> Bangladesh</a>
                </div>
            </div>
            <div class="flex">
            <div class="w-4/5">
                <div class="p-10 flex flex-wrap flex-row ">
                    {
                        news.map(news => <NewsCart news={news}></NewsCart>) 
                    }     
                </div>
            </div>
            <div class="w-1/5">
                <Sidebar/>
            </div>
        </div>
        </div>
        
    );
};

export default News;
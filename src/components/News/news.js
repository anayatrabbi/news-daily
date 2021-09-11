import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar';
import NewsCart from '../NewsCart/NewsCart'

const News = () => {

    const [news , setNews] = useState([])
 
    useEffect(()=>{
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    console.log(news)
    return (
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
    );
};

export default News;
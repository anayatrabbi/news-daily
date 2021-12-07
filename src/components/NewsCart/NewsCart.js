import React from 'react';
import { Link } from 'react-router-dom';

const NewsCart = (props) => {
    const news = props.news;
    console.log(news);
    const {_id,title, desctiption, image ,author , catagory } = news;

    return (
        <div class="max-w-xs rounded border-gray-100 overflow-hidden  shadow-lg mx-2" >
            {                
            news.image ? <img style={{height:"200px"}} src={`data:image/png;base64,${news.image.img}`}  alt=""/>
            :
            <img style={{height:"200px"}} class="w-full " src={image} alt=""/>

            }   
            <div class="px-3 py-3 font-bold text-lg text-gray-700 uppercase mb-2">
                    Title : {title}
            </div>
            <div>
            <a className="bg-blue-600 rounded-md w-auto text-white p-1" href="#"> {catagory}</a>
            </div>
           
            <span class=" px-3 py-3 font-bold text-xs text-gray-700 uppercase mb-2">Author: {author}</span>
            <div class=" px-3 py-3 text-blue-700 text-md hover:text-blue-500"><Link to={`/fullNews/${_id}`} >see more</Link></div>
              
        </div> 
    );
};

export default NewsCart;
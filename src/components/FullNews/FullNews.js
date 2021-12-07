import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Headers from "../Header/header"
import Footer from "../Footer/footer"
import "./FullNews.css"

const FullNews = () => {
const [ fullNews, setFullNews]=useState({})
    const {id} = useParams();
    const { title, description , image , author , catagory } = fullNews;
  
    console.log(typeof(fullNews))
    console.log(id)
    console.log(fullNews)
    useEffect(() =>{
        fetch(`https://mighty-plains-92386.herokuapp.com/fullNews/${id}`)
        .then(res => res.json())
        .then(data => {
          setFullNews(data[0])
        })
    },[id])
    return (
       
        <div>
            <div>
               <Headers/>
            </div>
            <div>
                <div className="title md:w-2/3 ">
                <h1 className="md:text-5xl text-3xl text-gray-600"> {title}</h1>
                <h4 className="md:text-lg text-lg text-gray-400">Author: {author}</h4>
                <h4 className="md:text-lg text-lg text-gray-400">Catagories: {catagory}</h4>
                <div>
                    <div>
                        {                
                        fullNews.image ? <img style={{height:"300px" , width:"100%", padding:"5px"}} className="w-1/2" src={`data:image/png;base64,${fullNews.image.img}`}  alt=""/>
                        :
                        <img style={{height:"200px" , width:"100%"}} className="w-full " src={image} alt=""/>

                        }                  
                    </div>
                    <div className="p-5 flex justify-items-start">
                        Description:{description}
                    </div>
                 </div>
                </div>
                
                
            <div>
                <Footer/>
            </div>
        </div>
        </div>
    );
};

export default FullNews;
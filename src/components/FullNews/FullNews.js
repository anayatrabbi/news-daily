import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Headers from "../Header/header"
import Footer from "../Footer/footer"

const FullNews = () => {
const [ fullNews, setFullNews]=useState({})
    const {id} = useParams();
    const { title, description , image , author , catagory } = fullNews;
  
    console.log(typeof(fullNews))
    console.log(id)
    console.log(fullNews)
    useEffect(() =>{
        fetch(`http://localhost:5000/fullNews/${id}`)
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
                <h1>Title: {title}</h1>
               <h4>Author: {author}</h4>
                <h4>Catagories: {catagory}</h4>
                <div>
                <div>
                {                
            fullNews.image ? <img style={{height:"200px"}} src={`data:image/png;base64,${fullNews.image.img}`}  alt=""/>
            :
            <img style={{height:"200px"}} class="w-full " src={image} alt=""/>

            }                  </div>
                <div>
                    Description:{description}
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
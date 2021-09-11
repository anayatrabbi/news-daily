import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import DashBoardSide from '../DashBoardSide/DashBoardSide';
const DashBoard = () => {

    const [info , setInfo] = useState({});
    const [file , setFile] = useState(null);
  
    const handleBlur = (e) =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        
    }
    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('author' , info.author)
        formData.append('catagory' , info.catagory)

        fetch('http://localhost:5000/addNews', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div class="flex">
            <DashBoardSide/>
           <div class="w-5/6 p-7 bg-gray-300">
           <div class="text-3xl p-1 mb-2">POST NEWS</div>
           <form  onSubmit={handleSubmit}>
                <input onBlur={handleBlur} name="title"  placeholder='Title' class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text"  />
                <br />
                <input onBlur={handleBlur} name="author"  placeholder='Author' class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-3 mt-3"  type="text"  />
                <br />
                <input onChange={handleFileChange} name="image" type="file" placeholder='Image' class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"   />
                <br />
                <textarea onBlur={handleBlur} name="description"   placeholder='Description' class="bg-gray-200 appearance-none mt-4 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  />
                <br />
                <select onBlur={handleBlur} id="catagory" name="catagory" autocomplete="catagory" class="bg-gray-200 appearance-none mt-4 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  >
                  <option>International</option>
                  <option>Bangladesh</option>
                  <option>Sports</option>
                </select>
                <br />
                <br />
                <input onBlur={handleBlur}  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Post" />
            </form>
           </div>
        </div>
    );
};

export default DashBoard;
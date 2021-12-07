import React, { useState } from 'react';
import DashBoardSide from '../DashBoardSide/DashBoardSide';




const AddAdmin = () => {

    const [info , setInfo] = useState({});

    
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('password', info.password);
        

        fetch('https://mighty-plains-92386.herokuapp.com/addAdmin', {
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
       <form  onSubmit={handleSubmit}>
            <input onBlur={handleBlur} name="name"  placeholder='Name' class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text"  />
            <br />
            <br />
          
            <input onBlur={handleBlur} name="email"   placeholder='Email' class="bg-gray-200 appearance-none mt-4 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  />
            <br />
            <input onBlur={handleBlur} name="password"   placeholder='Password' class="bg-gray-200 appearance-none mt-4 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  />

            <br />
            <br />
            <input  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="ADD" />
        </form>
       </div>
    </div>
    );
};

export default AddAdmin;
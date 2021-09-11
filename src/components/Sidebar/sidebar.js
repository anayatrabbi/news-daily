import React from 'react';

const sidebar = () => {
    return (
        <div class="border-gray-200 rounded-r-sm border-2 p-10">
            <span class="font-bold text-2xl text-gray-700 uppercase mb-2">Top News</span>
            <br/>
            <div class="flex flex-col">
            <span class="my-2"><a href="#" class="text-blue-700 text-md hover:text-blue-500">Pori moni has been release</a></span>
            <span class="my-2"><a href="#" class="text-blue-700 text-md hover:text-blue-500">Jhanker vai get best book award</a></span>
            <span class="my-2"><a href="#" class="text-blue-700 text-md hover:text-blue-500">Most watched movie of all time</a></span>
            </div>
            
        </div>
    );
};

export default sidebar;
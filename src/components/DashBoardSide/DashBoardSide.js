import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardSide = () => {
    return (
        <div class="w-1/6 h-full h-screen p-2 bg-gray-200">
        <div class="text-3xl p-5">DASH BOARD</div>
        <div class="mt-3 bg-red-500 hover:bg-red-700 p-4 rounded">
            <Link to="/">HOME</Link>
        </div>
        <div class="mt-3 bg-red-500 hover:bg-red-700 p-4 rounded">
            <Link to="/addAdmin">ADD ADMIN</Link>
        </div>
        <div class="mt-3 bg-red-500 hover:bg-red-700 p-4 rounded">
            <Link to="/dashboard">POST NEWS</Link>
        </div>
      </div>
    );
};

export default DashBoardSide;
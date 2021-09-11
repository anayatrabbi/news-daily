import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

	firebase.initializeApp(firebaseConfig);



const Login = () => {

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  	


	const [info , setInfo] = useState({});
	const provider = new GoogleAuthProvider();
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();

	let {from} = location.state || {from: {pathname: "/"}};
	console.log(loggedInUser)
	const googleSignIn = ()=>{
		const auth = getAuth();
		signInWithPopup(auth, provider)
  		.then((result) => {
     
			// var credential = result.credential;
        	// var token = credential.accessToken;
        	// const { displayName, email } = result.user;
        	// const singnedInUser = { name: displayName, email };
			// console.log(singnedInUser)
        	// setLoggedInUser(singnedInUser);
			// history.replace(from);
	
			const user = result.user;
			const loggedInUser = {Name: user.displayName , email: user.email , img: user.photoURL};
			localStorage.setItem('user',JSON.stringify(loggedInUser));
			
			setLoggedInUser(loggedInUser)
			history.replace(from)

		}).catch((error) => {

			const errorMessage = error.message;
			console.log(errorMessage);
		});
	}

	const handleBlur = (e) =>{
		
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
	
        
    }
	
	  
	  const onSubmit = data => {
		 const email = data.email;
		 const password = data.password;
		 fetch("http://localhost:5000/login" ,{
			 method : "POST",
			 headers: {"content-type": "application/json"},
			 body: JSON.stringify({email , password})
		 }).then((res) => res.json())
		 .then((data) => {
			
			const loggedInUser = {Name: "" , email: data.email , img: ""};
			localStorage.setItem('user',JSON.stringify(loggedInUser));
			
			setLoggedInUser(loggedInUser) 
			history.push("/dashboard")
		 })
		

		 
	};
    return (
        
	
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
			
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">

					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                    style={{backgroundImage:"url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"}}
					></div>

					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Hi Please Sign In</h3>
						<form onSubmit={handleSubmit(onSubmit)} class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email
								</label>
								<input
									{...register("email", { required: true })}
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									name="email"
									placeholder="Username"
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									{...register("password", { required: true })}
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									name="password"
									placeholder="******************"
								/>
								<p class="text-xs italic text-red-500">Please choose a password.</p>
							</div>
							
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Sign In
								</button>
                                <button
									onClick={googleSignIn}
									class="w-full mt-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Sign In with Google
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Create an Account!
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./forgot-password.html"
								>
									Forgot Password?
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

    );
};

export default Login;
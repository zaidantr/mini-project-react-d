import React from 'react'
import { useState, useEffect } from 'react';
import { gql, useLazyQuery } from "@apollo/client"
import { useNavigate } from 'react-router-dom';
import formjoin from '../assets/img/formjoin.svg'


const GetDataLogin = gql `
query MyQuery($_eq: String, $_eq1: String) {
    auth(where: {name: {_eq: $_eq}, password: {_eq: $_eq1}}) {
      id
      level
      name
      password
      url
      username
    }
  }
  `;

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [getTodo, {data, loading}] = useLazyQuery(GetDataLogin);
    let navigate = useNavigate()
    
    useEffect(() => {
        if (data?.auth.length && !loading) {
            return navigate("/pomodoro");
        }    
    }, [data, loading]);

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const login = () => {
        getTodo({
            variables: { 
                _eq: name,
                _eq1: password,
            }});
    };
    // if(loading) {
    //     return <h1>Loading</h1>
    // }

  return (
<section class="bg-secondary pt-16 pb-16 flex justify-between items-center mx-auto px-12 md:px-14 lg:px-24 w-full">
    <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32">
      <div class="space-y-12">
        <form>
            <div>
                <h1 class="text-2xl font-bold text-white mb-6" >Login</h1>
            </div>

            <div>
                <label class="text-white block mb-6 text-xl font-bold">Email</label>
                <input 
                type="text" 
                placeholder="Enter your email" 
                class="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out" 
                onChange={handleChangeName}
                />
            </div>

            <div>
                <label class="text-white block mb-6 text-xl font-bold">Password</label>
                <input 
                type="text" 
                placeholder="Enter your password" 
                class="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out" 
                onChange={handleChangePassword}
                />
            </div>

                {/* {data && <h4>gagal</h4>} */}
                
                <p 
                className='text-white font-medium py-4 px-8'>Don’t have an account? Sign Up 
                <a href='/signup' className='text-black'> here</a>
                </p>
                
            <button 
                class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out" 
                onClick={login}
                >Login📤
            </button>

          </form>
        </div>  

          <div class="mt-6">
            <div class="flex mt-10 space-x-6 mx-auto justify-center">
                <img src={formjoin} alt="FormJoin"/>     
          </div> 
      </div> 
    </div>
  </section> 
  )
}

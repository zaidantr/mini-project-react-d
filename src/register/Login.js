import React from 'react'
import { useState, useEffect } from 'react';
import { gql, useLazyQuery } from "@apollo/client"
import { useNavigate } from 'react-router-dom';
import formjoin from '../assets/img/loginsvg.svg'


const GetDataSignUp = gql `
query MyQuery($_eq: String, $_eq1: String) {
  signup(where: {name: {_eq: $_eq}, password: {_eq: $_eq1}}) {
    email
    id
    name
    password
  }
}
`;

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [getData, {data, loading}] = useLazyQuery(GetDataSignUp);
    let navigate = useNavigate()
    
    useEffect(() => {
        if (data?.signup.length && !loading) {
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
        getData({
            variables: { 
                _eq: name,
                _eq1: password,
            }});
    };
    // if(loading) {
    //     return <h1>Loading</h1>
    // }

  return (
<section className="bg-secondary pt-16 pb-16 flex justify-between items-center mx-auto px-12 md:px-14 lg:px-24 w-full">
    <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32">
      <div className="space-y-12">
        {/* <form> */}
            <div>
                <h1 className="text-2xl font-bold text-white mb-6" >Login</h1>
            </div>

            <div>
                <label className="text-white block mb-6 text-xl font-bold">Name</label>
                <input 
                type="text" 
                placeholder="Enter your name" 
                className="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out" 
                onChange={handleChangeName}
                />
            </div>

            <div>
                <label className="text-white block mb-6 text-xl font-bold">Password</label>
                <input 
                type="text" 
                placeholder="Enter your password" 
                class="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out" 
                onChange={handleChangePassword}
                />
            </div>

                {/* {data && <h4>gagal</h4>} */}
                
                <p 
                className='text-white font-medium'>Don’t have an account? Sign Up 
                <a href='/signup' className='text-black'> here</a>
                </p>
                
            <button 
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out" 
                onClick={login}
                >Login📤
            </button>

          {/* </form> */}
        </div>  

          <div className="mt-6">
            <div className="flex mt-10 space-x-6 mx-auto justify-center">
                <img src={formjoin} alt="FormJoin"/>     
          </div> 
      </div> 
    </div>
  </section> 
  )
}

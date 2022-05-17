import React from 'react'
import formjoin from '../assets/img/formjoin.svg'
import { useState } from 'react'

function Form() {
    const dataKosong = {
        nama: "",
        email: "",
        password: "",
    }

    const [data, setData] = useState(dataKosong)
    const regexName = /^[A-Za-z ]*$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const [errMsg, setErrMsg] = useState("")
    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
    
    if (name === "nama") {
        if (regexName.test(value)) {
            setErrMsg("")
        } else {
            setErrMsg("Nama Lengkap harus berupa Huruf")
        }
    }
    // ini yg dipake buat red warning
    
    if (name === "email") {
        if (regexEmail.test(value)) {
            setErrMsg("")
        } else {
            setErrMsg("Email Tidak Sesuai")
        }
    }

    if (name === "password") {
        if (regexPassword.test(value)) {
            setErrMsg("")
        } else {
            setErrMsg("Password Tidak Sesuai")
        }
    }

        setData({
            ...data,
            [name] :value
        })
        console.log("data", data)
    }

    const handleSubmit = (event) => {
        if (errMsg !== "") {
            alert("Data Pendaftar tidak sesuai")
        } else {
            alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
        } 
        resetData()        
        event.preventDefault()
        //Ngebuat ga jadi kosong ketika alert
    }

    const resetData = () => {
        setData(dataKosong);
        setErrMsg("")
    }

  return (
    <>
    <section id='join' class="bg-secondary pt-16 pb-16 flex justify-between items-center mx-auto px-12 md:px-14 lg:px-24 w-full">  
      <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32">
        <div class="space-y-12">
             <form onSubmit={handleSubmit}>
                
                <div>
                <h1 class="text-2xl font-bold text-white mb-6">Sign Up</h1>
                    
                      <label
                      class="text-white block mb-6 text-xl font-bold"
                      >
                          Nama
                          </label>
                          <input 
                          class="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
                          type="text"
                          name="nama"
                          required
                          onChange={handleInput}
                          value={data.nama}
                          />
                </div>
                
                <div>
                      <label
                      class="text-white block mb-6 text-xl font-bold"
                      >
                          Email
                          </label>
                          <input 
                          class="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
                          type="text"
                          name="email"
                          required
                          onChange={handleInput}
                          value={data.email}
                          />
                </div>

                <div>
                      <label
                      class="text-white block mb-6 text-xl font-bold"
                      >
                          Password
                          </label>
                          <input 
                          class="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
                          type="password"
                          name="password"
                          onChange={handleInput}
                          value={data.password}
                          />
                </div>

                <div>
                    <span className='text-white' >{errMsg}</span> <br/>
                      <button className="text-base font-semibold text-white bg-primary rounded-md py-3 px-8 hover:shadow-lg hover:opacity-80 duration-300 ease-in-out mr-3">Submit</button>
                      <button className="text-base font-semibold text-dark bg-white rounded-md hover:shadow-lg py-3 px-8 hover:opacity-80 duration-300 ease-in-out" onClick={resetData}>Reset</button>
                </div>
              </form>

        </div>
          <div class="mt-6">
            <div class="flex mt-10 space-x-6 mx-auto justify-center">
            <img src={formjoin} alt="FormJoin"/>    
          </div>
        </div>
      </div>      
    </section>  
    </>
  )
}

export default Form;
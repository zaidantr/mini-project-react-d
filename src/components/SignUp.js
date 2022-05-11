import React, {useState} from 'react'
import formjoin from '../assets/img/formjoin.svg';
import { gql, useMutation } from '@apollo/client';

const GetDataSignUp = gql `
  query MyQuery {
    signup {
      password
      name
      id
      email
    }
  }
`;

const InsertDataSignUp = gql `
  mutation MyMutation($object: signup_insert_input = {}) {
    insert_signup_one(object: $object) {
      password
      name
      email
    }
  }
`;

export default function SignUp() {

  const [insertDataSignUp, {loading: loadingInsert}] = useMutation(InsertDataSignUp, {refetchQueries: [GetDataSignUp]});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if(loadingInsert) {
    <h1>Loading</h1>
  }

  const onChangeName = (e) => {
    if (e.target) {
      setName(e.target.value);
    }
  };

  const onChangeEmail = (e) => {
    if (e.target) {
      setEmail(e.target.value);
    }
  };

  const onChangePassword = (e) => {
    if (e.target) {
      setPassword(e.target.value);
    }
  };


  const onSubmitList = (e) => {
    e.preventDefault();
    insertDataSignUp({
      variables: {
        object: {
          name: name,
          email: email,
          password: password,
        },
      },
    });
    setEmail('');
  };

  return (
    <section class="bg-secondary pt-16 pb-16 flex justify-between items-center mx-auto px-12 md:px-14 lg:px-24 w-full">
    
    <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32">
      <div class="space-y-12">
        <form>
            <div>
              <h2 id="hire" class="text-2xl font-bold text-white mb-6">Sign Up</h2>
              <label class="text-white block mb-6 text-xl font-bold">Name</label>
                <input 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={onChangeName}
                class="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
                />
            </div>

            <div>
              <label class="text-white block mb-6 text-xl font-bold">Email</label>
                <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={onChangeEmail}
                class="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
                />
            </div>

            <div>
              <label class="text-white block mb-6 text-xl font-bold">Password</label>
                <input 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={onChangePassword} 
                class="bg-slate-200 w-full py-4 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
                />
            </div>

            <p 
            className='text-white font-medium py-4 px-8'>
              Already have an account? Login <a className='text-black' href='/login'>here</a>
            </p>

            <button 
            onClick={onSubmitList}
            class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
            >Sign Up📤
            </button>

          </form>
      </div>

        {/* Illustration */}
      <div class="mt-6">
        <div class="flex mt-10 space-x-6 mx-auto justify-center">
            <img src={formjoin} alt="FormJoin"/>
            
        </div>
      </div>
      
    </div>

  </section>  
    )
}

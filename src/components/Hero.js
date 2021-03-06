import React, {useState} from 'react';
import Head from '../assets/img/head.svg'
import { gql, useMutation } from '@apollo/client';

const GetNewsletter = gql `
  query MyQuery {
    newsletter {
      email
      id
    }
  }
`;

const InsertNewsletter = gql `
mutation MyMutation($object: newsletter_insert_input = {}) {
  insert_newsletter_one(object: $object) {
    email
  }
}
`;

export default function Hero() {

  const [insertNewsletter, {loading: loadingInsert}] = useMutation(InsertNewsletter, {refetchQueries: [GetNewsletter]});

  const [email, setEmail] = useState('');


  if(loadingInsert) {
    <h1>Loading</h1>
  }

  const onChangeEmail = (e) => {
    if (e.target) {
      setEmail(e.target.value);
    }
  };


  const onSubmitList = (e) => {
    e.preventDefault();
    insertNewsletter({
      variables: {
        object: {
          email: email,
        },
      },
    });
    setEmail('');
  };


  return (
    <section id="" className="pt-36">
    <div className="container">
        <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
                <h1 className="text-base font-reguler text-dark
               md:text-xl">🪔Jump start your growth<span className="block font-bold text-4xl mt-1 text-dark md:text-3xl lg:text-5xl">We boost the growth for <span className="text-primary">Startup</span> to Fortune 500 Companies⌛</span></h1>

                <p className="font-medium text-dark mb-10 leading-relaxed">Get the most accurate leads sales people traning and conversions. tools and more - all within the same one billing</p>

                <form
                >
                <input 
                type="text" 
                placeholder="Enter your email" 
                value={email}
                onChange={onChangeEmail}
                className="bg-slate-200 py-2 px-8 border-solid border-sky-100 border-2 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
                />
                <a 
                onClick={onSubmitList}
                className="cursor-pointer text-base font-semibold text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 duration-300 ease-in-out">Subscribe</a>
                </form>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
                <div className="relative mt-10 lg:mt-9 lg:right-0">
                  <img src={Head} alt="head"/>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

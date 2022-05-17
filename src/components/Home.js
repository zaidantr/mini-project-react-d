import React from 'react'
import Navbar from '../landingpage/Navbar';
import Hero from '../landingpage/Hero';
import Partnership from '../landingpage/Partnership';
import Achieve from '../landingpage/Achieve';
import Review from '../landingpage/Review';
import Form from '../landingpage/Form';
import Footer from '../landingpage/Footer';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Partnership/>
    <Achieve/>
    <Review/>
    <Form/>
    <Footer/>
    </>
  )
}

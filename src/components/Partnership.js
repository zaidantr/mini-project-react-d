import React from 'react'
import image1 from '../assets/img/image1.png'
import image2 from '../assets/img/image2.png'
import image3 from '../assets/img/image3.png'
import image4 from '../assets/img/image4.png'
import image5 from '../assets/img/image5.png'

export default function Partnership() {
  return (
    <section class="pt-24">
    <div class="container">
      <div class="flex flex-wrap mx-auto text-center">
          <div class="w-full self-center px-4 lg:w-1/6">
              <h1>Proud partner at Hubspot & Segment</h1>
          </div>

          <div class="w-full self-center px-4 lg:w-1/6">
            <img src={image1} alt=""/>
          </div>

          <div class="w-full self-center px-4 lg:w-1/6">
            <img src={image2} alt=""/>
          </div>
          <div class="w-full self-center px-4 lg:w-1/6">
            <img src={image3} alt=""/>
          </div>

          <div class="w-full self-center px-4 lg:w-1/6">
            <img src={image4} alt=""/>
          </div>

          <div class="w-full self-center px-4 lg:w-1/6">
            <img src={image5} alt=""/>
          </div>
        </div>
      </div>
  </section>
  )
}

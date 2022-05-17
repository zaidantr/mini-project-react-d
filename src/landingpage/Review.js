import React from 'react'

export default function Review() {
  return (
<section id='review' class="">
  <div class="container px-5 py-24 mx-auto">
  <div className="w-full px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">What Do They Say About Us?</h2>
          <p className="font-medium text-md text-tertiary md:text-lg">A lot of people are helped by ContainIt</p>
        </div>    
      </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-primary px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-white mb-1">"It's so Amazing"</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Martina Miley</h1>
          <p class="leading-relaxed mb-3 text-white">Bravo, My productivity boost until 1000%. I definetely gonna use this app again and again until i'm saying "It's enough".</p>
        </div>
      </div>

      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-primary px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-white mb-1">"I've never been found this app before"</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Hubert Macy</h1>
          <p class="leading-relaxed mb-3 text-white">My friend told me about this app, and then i started using until now. Cantain IT giving me more comfort time during study.</p>
        </div>
      </div>

      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-primary px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-white mb-1">"I can always focus on my work"</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Peggie Thornton</h1>
          <p class="leading-relaxed mb-3 text-white">This app just like my Buddy during study. I have no idea if this app didn't exist. Maybe i would be lazy.</p>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

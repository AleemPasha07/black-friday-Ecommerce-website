import React from 'react'
import bgImage1 from '../../../assets/img/01-bg-grunge.jpg';


const Contact = () => {
  return (
    <div className='min-w-[100%] min-h-[100vh]'>
      <div className='h-[500px] flex justify-center text-center  text-white items-center' style={{ backgroundImage: `url(${bgImage1})` }} id='banner' >
        <div className="relative text-white min-h-screen flex items-center justify-center px-4">
          {/* Text */}
          <div className="text-center">
            <h1 className="text-6xl sm:text-8xl leading-tight " id='contact'>
              Contact
            </h1>
          </div>
        </div>
      </div>


      <div className="bg-[#262626] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className='mt-10'>
          <h2 className="text-4xl font-bold mb-8 mt-10">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Have questions or need assistance? Get in touch with our friendly and responsive customer support team.
          </p>
          <div className="h-1 w-12 bg-white mb-8"></div>

          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-1">PHONE</p><br />
            <div className="text-lg text-white font-bold">555-1234-678</div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-1">EMAIL</p><br />
            <div className="text-lg text-white font-bold">abc@gmail.com</div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-1">ADDRESS</p><br />
            <div className="text-lg text-white font-bold">
              13 Fifth Avenue, New York, NY 101660
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='h-[500px] mt-10'>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 py-2"
            />
            <textarea
              placeholder="Your Message"
              rows="2"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 py-2"
            ></textarea>
            <button
              type="submit"
              className="bg-[#D7263D] hover:bg-[#c01f34] text-white font-bold py-2 px-6 mt-4"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>

     <section className="py-16" style={{ backgroundImage: `url(${bgImage1})` }} id='section'>
            <div className="max-w-4xl mx-auto text-center px-4">
              <div className="mb-4">
                <div className="h-1 w-16 bg-white mx-auto mb-6 mt-30"></div> {/* Separator line */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Don’t Miss Out – Shop Black Friday Deals Now!
                </h2>
                <div className="text-white text-lg mb-4">
                  Unlock exclusive savings before time runs out. Your biggest discounts are just a click away!
                </div> <br />
                <a
                  href="#"
                  className="inline-block bg-gray-500 text-white font-semibold py-3 px-8  hover:bg-gray-300 transition"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Contact

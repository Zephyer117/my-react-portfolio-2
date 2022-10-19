import React from 'react'
import Image from '../Images/myImage2.jpg'

const Home = () => {
  return (
    <div className=" ">
      <div className=" px-10 text-white hero-sec">
        <div className="hero-text">
          <p
            className="pt-16 font-bold text-2xl"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Web designer
          </p>
          <h1
            className="pt-3 pb-1 font-bold text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Ms Utsho
          </h1>
          <div
            className="hero-span pt-4 w-2/4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </span>
          </div>
          <button
            className="my-10 py-2 bg-red-400 hero-sec-btn"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            View More
          </button>
        </div>
      </div>

      <div className="about-sec bg-black text-white">
        <div className=" mx-5">
          <div className="about-sec-dvd lg:flex justify-between text-right">
            <div className="py-36 Scnd-img">
              <div data-aos="fade-up" data-aos-duration="3000">
                <img className="mt-24" src={Image} alt="myImage" />
                <h1 className="text-center text-5xl pt-6">Ms Utsho</h1>
                <p className="text-center text-2xl pt-3">
                  Developer / Designer
                </p>
              </div>
            </div>
            <div className="about-text-down w-1/2 py-36">
              <h1 className="about-sec-heading mb-10 text-left text-5xl font-bold">
                About Me
              </h1>
              <div>
                <p className=" About-text text-left mt-5">
                  It is a long established fact that a reader will be distracted
                  by the eadable content of a page when looking at its layout.
                  The point of using Lorem Ipsum th that it has a ore-or-less
                  normal distributi. content here', making it look like readable
                  English.
                  <br />
                  <br />
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident
                </p>
                <div className="personal-info">
                  <h1 className="pt-5 text-left font-bold text-3xl">
                    personal info
                  </h1>
                  <div className="info-about-sec flex justify-between">
                    <div className="prs-text flex-col text-left">
                      <p className="leading-10">Name : MsUtsho</p>
                      <p className="leading-10">Age : 21</p>
                      <p className="leading-10">Nationality : Bangladeshi</p>
                      <p className="leading-10">FreeLancer : Available</p>
                    </div>
                    <div className="prs-text flex-col text-left">
                      <p className="leading-10">
                        Address: Satkhira , Bangladesh
                      </p>
                      <p className="leading-10">Phone : +88001756680320</p>
                      <p className="leading-10">Instagram : utsho1179</p>
                      <p className="leading-10">
                        FreeLancer : msutsho55@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

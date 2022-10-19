import React from 'react'
import Image from '../Images/code-1.jpg'

const About = () => {
  return (
    <div className="bg-black text-white">
      <div className=" mx-5">
        <div className="flex justify-between text-right">
          <div className="Scnd-img">
            <img src={Image} alt="Here is My Image" />
            <h1 className="text-center text-5xl pt-6">Ms Utsho</h1>
            <p className="text-center text-2xl pt-3">Designer</p>
          </div>
          <div>
            <h1 className="text-left  text-5xl font-bold">About Me</h1>
            <div>
              <p className="About-text text-left mt-5">
                It is a long established fact that a reader will be distracted
                by the eadable content of a page when looking at its layout. The
                point of using Lorem Ipsum th that it has a ore-or-less normal
                distributi. content here', making it look like readable English.
                <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident
              </p>
              <div className="personal-info">
                <h1 className="pt-5 text-left font-bold text-3xl">
                  personal info
                </h1>
                <div className="flex justify-between">
                  <div className="flex-col text-left">
                    <p>Name : MsUtsho</p>
                    <p>Age : 21</p>
                    <p>Nationality : Bangladeshi</p>
                    <p>FreeLancer : Available</p>
                  </div>
                  <div className="flex-col text-left">
                    <p>Name : MsUtsho</p>
                    <p>Age : 21</p>
                    <p>Nationality : Bangladeshi</p>
                    <p>FreeLancer : Available</p>
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

export default About

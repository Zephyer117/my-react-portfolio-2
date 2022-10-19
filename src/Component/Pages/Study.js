import React from 'react'

const Study = () => {
  return (
    <div className="education">
      <div className="Educ text-white">
        <h1 className="educational-sec-heading text-center text-4xl font-bold pt-16">
          Education & Skills
        </h1>
        <div className="Skills-sec flex justify-between container mx-auto">
          <div
            className="passing-years flex flex-col"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="pas-body">
              <div className="pas">
                <p>2010-2012</p>
                <h1>Front-end Engineer</h1>
                <p>International Design Institute</p>
              </div>
            </div>
            <div className="pas-body">
              <div className="pas">
                <p>2013-2014</p>
                <h1>Graphics Designer</h1>
                <p>HRK Design Institute</p>
              </div>
            </div>
            <div className="pas-body">
              <div className="pas">
                <p>2010-2012</p>
                <h1>Visual Designer</h1>
                <p>HRK Design Institute</p>
              </div>
            </div>
          </div>
          <div
            className="skill-prnct flex flex-cols "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="bar">
              <span>90%</span>
              <div className="bar-bar w-full">
                <h1>html</h1>
                <div className="progress-bar-1">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="bar">
              <span>85%</span>
              <div className="bar-bar w-full">
                <h1>CSS</h1>
                <div className="progress-bar-2">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="bar">
              <span>80%</span>
              <div className="bar-bar w-full">
                <h1>Java Script</h1>
                <div className="progress-bar-3">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="bar">
              <span>84%</span>
              <div className="bar-bar w-full">
                <h1>React.JS</h1>
                <div className="progress-bar-4">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="bar">
              <span>80%</span>
              <div className="bar-bar w-full">
                <h1>Tailwind CSS</h1>
                <div className="progress-bar-5">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Study

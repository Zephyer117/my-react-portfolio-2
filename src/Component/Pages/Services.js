import React from 'react'
import { CgIfDesign } from 'react-icons/cg'
import { HiDeviceMobile, HiOutlineDesktopComputer } from 'react-icons/hi'
import { SiGoogleads, SiMarketo } from 'react-icons/si'
import { TbSocial } from 'react-icons/tb'

const Services = () => {
  return (
    <div className="service">
      <div className="service-sec text-white">
        <div>
          <h1 className="text-5xl font-bold text-center service-sec-heading">
            services
          </h1>
        </div>
        <div className="services container">
          <div
            className="top-service-sec flex justify-between"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="card service-card bg-black">
              <HiOutlineDesktopComputer className="icon-1" />
              <h1>Web Development</h1>
              <p className="py-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="card service-card bg-black">
              <HiDeviceMobile className="icon-1" />
              <h1>Web Design</h1>
              <p className="py-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="card service-card bg-black">
              <CgIfDesign className="icon-1" />
              <h1>Graphics Design</h1>
              <p className="py-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div
            className="down-service-sec flex justify-between"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="card service-card bg-black">
              <TbSocial className="icon-1" />
              <h1>Mobile Apps</h1>
              <p className="py-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="card service-card bg-black">
              <SiMarketo className="icon-1" />
              <h1>SEO Marketing</h1>
              <p className="py-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className=" card service-card bg-black">
              <SiGoogleads className="icon-1" />
              <h1 className="py-1">Web Banner</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

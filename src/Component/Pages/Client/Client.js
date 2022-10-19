import React from 'react'
import { clientReview } from './ClientReview'
import Slider from 'react-slick'
import './Client.css'

const Client = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <div className="client" data-aos="fade-up" data-aos-duration="1000">
        <Slider {...settings}>
          {clientReview.map((item) => (
            <div key={item.id}>
              <div className="client-rvw">
                <img src={item.image} alt="" />
                <div className="client-name-rvw">
                  <p>{item.article}</p>
                  <div className="nmAndOcp">
                    <h1>{item.name}</h1>
                    <span>{item.occp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Client

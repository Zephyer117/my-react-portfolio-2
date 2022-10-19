import Slider from 'react-slick'
import { blogData } from './Data'
import './Blog.css'

const Blog = () => {
  const settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <div className="App" data-aos="fade-up" data-aos-duration="1000">
        <Slider {...settings}>
          {blogData.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-top">
                <img src={item.linkImg} alt="Blog-posts" />
              </div>
              <div className="card-bottom">
                <h1>{item.title}</h1>
                <span>{item.article}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Blog

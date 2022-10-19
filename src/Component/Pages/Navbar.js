import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../../index.css'

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false)

  const handleMenu = () => {
    setMenuShow(!menuShow)
  }

  const menu = [
    {
      id: 1,
      title: 'Home',
      path: '/',
    },
    {
      id: 2,
      title: 'Service',
      path: 'service',
    },
    {
      id: 3,
      title: 'Portfolio',
      path: 'portfolio',
    },
    {
      id: 4,
      title: 'Education',
      path: 'education',
    },
    {
      id: 5,
      title: 'Contact',
      path: 'contact',
    },
    {
      id: 6,
      title: 'Experience',
      path: 'experience',
    },
  ]

  return (
    <div className="relative">
      <div className="nav-position bg-black">
        <div
          className=" Navbar 
    text-gray-500"
        >
          <h1 className="text-4xl">Utsho</h1>
          <ul className="hidden lg:flex">
            {menu.map(({ id, title, path }) => {
              return (
                <li className="ml-5" key={id}>
                  <Link to={path}>{title}</Link>
                </li>
              )
            })}
          </ul>
          <div
            className="lg:hidden cursor-pointer pr-1 z-10 text-gray-500"
            onClick={handleMenu}
          >
            {menuShow ? <FaTimes /> : <FaBars />}
          </div>
          {menuShow && (
            <ul className="pt-3 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
              {menu.map(({ id, title, path }) => {
                return (
                  <li className="mt-2 text-2xl text-white font-bold" key={id}>
                    <Link
                      onClick={() => {
                        setMenuShow(!menuShow)
                      }}
                      to={path}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={100}
                    >
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

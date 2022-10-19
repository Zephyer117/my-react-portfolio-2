import React from 'react'
import './SocialMedia.css'
import { SocialMediaData } from './SocialMediaData'

const SocialMedia = () => {
  return (
    <div className="socialMedias">
      <ul>
        {SocialMediaData.map(({ id, title, href, icon }) => (
          <li key={id} className="smList">
            <a className="socialLink" href={href}>
              {title}
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialMedia

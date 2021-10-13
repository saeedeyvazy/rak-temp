import React from 'react'
import { INSTAGRAM } from '../../images'
import './style.css'

function Card({ image, description, link, siteLink }) {
	return (
		<div className='card-container'>
			<div className='image-container'>
				<img src={image} alt='card-logo' className='card-image' />
			</div>
			<a href={siteLink} className='description'>
				{description}
			</a>
			<a href={link}>
				<img src={INSTAGRAM} alt='instagram-logo' className='insta-logo' />
			</a>
		</div>
	)
}

export default Card

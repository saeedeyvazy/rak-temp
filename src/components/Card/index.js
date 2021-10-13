import React from 'react'
import { INSTAGRAM } from '../../images'
import './style.css'

function Card({ image, description, link }) {
	return (
		<a href={link} className='card-container'>
			<div className='image-container'>
				<img src={image} alt='card-logo' className='card-image' />
			</div>
			<p className='description'>{description}</p>
			<img src={INSTAGRAM} alt='instagram-logo' className='insta-logo' />
		</a>
	)
}

export default Card

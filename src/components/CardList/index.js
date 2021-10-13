import React from 'react'
import './style.css'
import Card from '../Card'
import { RAK_LOGO, PVRE_LOGO } from '../../images'

function CardList() {
	return (
		<div className='card-list-container'>
			<Card
				link='https://www.instagram.com/rakceramicsiran'
				image={RAK_LOGO}
				description='rakceramicsiran.com'
				siteLink='http://rakceramicsiran.com'
			/>
			<Card
				link='https://www.instagram.com/pvreceramics'
				image={PVRE_LOGO}
				siteLink='http://pvreceramics.com/'
				description='pvreceramics.com'
			/>
		</div>
	)
}

export default CardList

import React from 'react'
import './style.css'
import Card from '../Card'
import { RAK_LOGO, PVRE_LOGO } from '../../images'

function CardList() {
	return (
		<div className='card-list-container'>
			<Card image={RAK_LOGO} description='rakceramicsiran.com' />
			<Card image={PVRE_LOGO} description='pvreceramics.com' />
		</div>
	)
}

export default CardList

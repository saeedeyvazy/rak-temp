import React from 'react'
import { LOGO } from '../../images'
import './style.css'
function Logo() {
	return (
		<div className='logo-container'>
			<img src={LOGO} alt='logo' className='logo' />
		</div>
	)
}

export default Logo

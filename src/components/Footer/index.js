import React from 'react'
import './style.css'
import { RECT } from '../../images'
import '../../util/common'
function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer-left-part'>
				<p>#2, Unit 2, 2nd Bahar Alley, S. Shiraz St.</p>
				<p>Mollasadra Ave, Tehran, Iran</p>
				<p>+98 21 4772 6000</p>
				<p>info@nikanaghsh.com</p>
			</div>
			<div className='rect' style={{ marginTop: '-8px' }}>
				<img src={RECT} alt='' />
			</div>
			<div className='footer-right-part'>
				<p>تهران، میدان ونک، ملاصدرا، خیابان شیراز جنوبی، کوچه</p>
				<p>بهار دوم، پلاک ۲، واحد ۲</p>
				<p>{'+98 (21) 477 26 000'.toIndiaDigits()}</p>
				<p>info@nikanaghsh.com</p>
			</div>
		</div>
	)
}

export default Footer

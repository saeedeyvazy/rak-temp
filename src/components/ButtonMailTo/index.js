import React from 'react'

const ButtonMailto = ({ mailto, label }) => {
	return (
		<a
			style={{
				color: 'white',
				cursor: 'pointer',
				fontSize: '17px',
				fontWeight: '400',
			}}
			to='#'
			onClick={(e) => {
				window.location = mailto
				e.preventDefault()
			}}
		>
			{label}
		</a>
	)
}

export default ButtonMailto

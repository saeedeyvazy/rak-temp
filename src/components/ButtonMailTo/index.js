import React from 'react'

const ButtonMailto = ({ mailto, label }) => {
	return (
		<a
			style={{
				color: 'white',
				cursor: 'pointer',
				fontWeight: 400,
				fontFamily: 'Lato',
				fontSize: '18px',
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

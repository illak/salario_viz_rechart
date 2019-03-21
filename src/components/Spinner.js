import React from 'react';

const Spinner = () => (
	<div className='ui segment' style={{ height: '100%' }}>
		<div
			className='ui active inverted dimmer'
			style={{ height: '100%', width: '100%' }}
		>
			<div className='ui large text loader'>Cargando datos...</div>
		</div>
		<p />
	</div>
);

export default Spinner;

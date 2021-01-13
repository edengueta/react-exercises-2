import React, { useState } from 'react';
import './RealNumber.scss';

function RealNumber() {
	const [value, setValue]=useState('');

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>
			
			<input value={value} type="text" className="text-box" onChange={(e)=> setValue(e.target.value)} />
			{/^\d+$/.test(value) && <button>Submit</button>}

		</div>
	)
}

export default RealNumber;

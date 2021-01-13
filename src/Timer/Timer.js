import React, { useEffect, useState } from 'react';
import './Timer.scss';

function Timer() {
	const [seconds, setSeconds]=useState(0);

	useEffect(()=>{
			const timerInterval =  setInterval (()=> {
			      setSeconds((prevSec)=> prevSec +1);
			}, 1000);
			return ()=> clearInterval(timerInterval)
	},[])

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{seconds}</div>
		</div>
	)
}

export default Timer;

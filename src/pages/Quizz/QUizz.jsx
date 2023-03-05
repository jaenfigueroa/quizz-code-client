import { useEffect, useState } from "react";
import "./Quizz.css";
import questions from "./data/questions";

export const Quizz = () => {
	
	// const [time, setTime] = useState(10);
	// useEffect(() => {
	// }, [time]);

	let time = 10;
	const timeInterval = setInterval(() => {
		if (time === 0) return clearInterval(timeInterval);
		console.log(time -= 1);
	}, 1500);

	return (
		<section className="section-quizz">
			<div className="quizz-timer">{time}s</div>
			<h2 className="ask-title">{questions[1].title}</h2>
			<div className="ask-options">
				{questions[0].options.map((option, index) => (
					<button
						key={`${index}-${option.answertext}`}
						className={`ask-option-btn-${index}`}
					>
						{option.answertext}
					</button>
				))}
			</div>
		</section>
	);
};

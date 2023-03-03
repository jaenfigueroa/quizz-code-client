import { useState } from "react";
import "./Quizz.css";
import questions from "./data/questions";
import { useParams } from "react-router-dom";

export const Quizz = () => {
	const [score, setScore] = useState(0);
	const [time, setTime] = useState({ m: 5, s: 0 });
	const { number } = useParams();

	const checkAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
	};

	return (
		<main className="main-quizz">
			<section className="section-quizz">
				<div className="status-quizz">
					{/* <h1 className="question-title">
						Question {number} of {questions.length}
					</h1> */}
					<span className="question-timer">
						{time.m} : {time.s}
					</span>
				</div>

				<article className="">
					<h2 className="ask-title">{questions[number].title}</h2>

					{questions[number].img && (
						<img
							className="picture-question"
							src={questions[number].img}
							alt={questions[number].title}
						/>
					)}

					<div className="optins">
						{questions[number].options.map(
							({ answertext, isCorrect }, index) => (
								<button
									className="btn-option"
									key={index}
									onClick={() => checkAnswer(isCorrect)}
								>
									{answertext}
								</button>
							),
						)}
					</div>
				</article>
			</section>
		</main>
	);
};

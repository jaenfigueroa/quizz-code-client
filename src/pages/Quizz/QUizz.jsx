import { useState } from "react";
import { useParams } from "react-router-dom";
import { randomQuestion } from "../../helpers/randomQuestion";
import { Pomodoro } from "./Pomodoro/Pomodoro";
import { Question } from "./Question/Question";
import "./Quizz.css";

////////////////////////////////////////////////
export const Quizz = () => {

	const {category} = useParams()
	const [processStatus, setProcessStatus] = useState('start')
	const [question, setquestion] = useState({})

	//1. traer una "question" al azar
	const startQuestion = async () => {
		const data = await randomQuestion(category)

		if (data.status === 'success') {
			setquestion(data.question)
			setProcessStatus('progress')
		}
	}

	////////////////////////////////////////////////
	return (
		<section className="section-quizz">
			<h4 className="component-title">Categoria: {category}</h4>

			{processStatus === 'start' && <button onClick={startQuestion}>Empezar</button>}

			{processStatus === 'progress' && (
				<>
					<Pomodoro setInProcess={setProcessStatus} />
					<Question data={question} />
				</>
			)}

			{processStatus === 'finish' && (
				<>
					<p>Resultados: Correcto</p>
					<button onClick={() => setProcessStatus('progress')}>Siguiente</button>
				</>
			)}
		</section>
	)

}

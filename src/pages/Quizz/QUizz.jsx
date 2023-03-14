import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkQuestion } from "../../helpers/checkQuestion";
import { randomQuestion } from "../../helpers/randomQuestion";
import { Question } from "./Question/Question";
import "./Quizz.css";
import { Results } from "./Results/Results";

////////////////////////////////////////////////
export const Quizz = () => {

	const { category } = useParams()

	const [processStatus, setProcessStatus] = useState('start') //start, progress, validation, finish
	const [question, setquestion] = useState({})
	const [optionUser, setOptionUser] = useState(0)
	const [results, setResults] = useState({})

	//1. traer una "question" al azar
	const getQuestion = async () => {
		const data = await randomQuestion(category)

		if (data.status === 'success') {
			setProcessStatus('progress')
			setquestion(data.question)
		}
	}

	//2. enviar opcion elegida y traer resultados
	useEffect(() => {
		const getResults = async () => {
			const data = await checkQuestion(question["_id"], optionUser)
			// console.log(data)
			setResults(data)
			setProcessStatus('finish')
		}

		if (processStatus === 'validation') {
			// console.log('se termino')
			getResults()
		}
	}, [processStatus])



	////////////////////////////////////////////////
	return (
		<section className="section-quizz">
			<h4 className="component-title">Categoria: {category}</h4>

			{processStatus === 'start' && <button onClick={getQuestion}>Empezar preguntas</button>}

			{processStatus === 'progress' && (
				<Question
					question={question}
					processStatus={processStatus}
					setProcessStatus={setProcessStatus}
					setResults={setResults}
					optionUser={optionUser}
					setOptionUser={setOptionUser}
				/>
			)}

			{processStatus === 'finish' && (
				<Results
					getQuestion={getQuestion}
					results={results}
				/>
			)}
		</section>
	)

}

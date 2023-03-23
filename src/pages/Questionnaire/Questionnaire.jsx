import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { checkQuestion } from '../../helpers/checkQuestion'
import { getRandomQuestion } from '../../helpers/getRandomQuestion'
import { Pomodoro } from './Pomodoro/Pomodoro'
import { Question } from './Question/Question'
import './Questionnaire.css'
import { Results } from './Results/Results'
import { Start } from './Start/Start'
/// /////////////////////////////////////////////
export const Questionnaire = () => {
  const { category } = useParams()
  const [processStatus, setProcessStatus] = useState('loading') // start, progress, validation, finish
  const [question, setQuestion] = useState({})
  const [optionUser, setOptionUser] = useState(0)
  const [results, setResults] = useState({})

  // 1. traer una "question" al azar
  const getQuestion = async () => {
    setProcessStatus('loading')

    const data = await getRandomQuestion(category)
    // console.log(data)
    if (data.status === 'success') {
      setProcessStatus('progress')
      setOptionUser(0)
      setQuestion(data.question)
    }
  }

  // 2. enviar opcion elegida y traer resultados
  useEffect(() => {
    const getResults = async () => {
      setProcessStatus('loading')

      const data = await checkQuestion(question._id, optionUser)
      // console.log(data)
      setResults(data)
      setProcessStatus('finish')
    }

    if (processStatus === 'validation') {
      // console.log('se termino')
      getResults()
    }
  }, [processStatus])

  useEffect(() => {
    getQuestion()
  }, [])

  /// /////////////////////////////////////////////
  return (
    <section className='section-quizz'>
      <h4 className='component-title'>Categoria: {category}</h4>

      {processStatus === 'loading' && <Start />}

      {processStatus === 'progress' && (
        <>
          <Pomodoro setProcessStatus={setProcessStatus} />
          <Question
            question={question}
            setProcessStatus={setProcessStatus}
            optionUser={optionUser}
            setOptionUser={setOptionUser}
            category={category}
          />
        </>
      )}

      {processStatus === 'finish' && (
        <Results getQuestion={getQuestion} results={results} />
      )}
    </section>
  )
}

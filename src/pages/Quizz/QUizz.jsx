import { useEffect } from "react";
import "./Quizz.css";
import questions from "./data/questions";

////////////////////////////////////////////////
export const Quizz = () => {

	let time = 20;


	useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])

	////////////////////////////////////////////////
	return (
		<section className="section-quizz">

			<h4 className="component-title">Categoria: CSS</h4>

			{/* TEMPORIZADOR */}
			<div className="section-quizz__timer">
				{time}s
			</div>

			{/* PREGUNTA */}
			<h2 className="section-quizz__ask">{questions[1].title}</h2>

			{/* CONTENEDOR DE OPCIONES */}
			<div className="section-quizz__options-container">
				{questions[0].options.map((option, index) => (
					<button
						key={`${index}-${option.answertext}`}
						className='section-quizz__option'>
						
						{/* CIRCLE */}
						<div className="section-quizz__option-result">
							<i class="fa-solid fa-check"></i>
							{/* <i class="fa-regular fa-check"></i> */}
							{/* <i class="fa-sharp fa-regular fa-check"></i> */}
						</div>

						{/* {option.answertext} */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam asperiores totam laborum earum similique aut sunt sit veritatis illum.
					</button>
				))}
			</div>

			{/* BOTON CONFIRMA RESPUESTA */}
			<button className="section-quizz__submit">Comprobar</button>

		</section>
	);
};

import { Link } from 'react-router-dom'
import './LanguageCard.css'

//////////////////////////////////////
const LanguageCard = ({ category }) => {

  const { name, icon } = category;


  //////////////////////////////////////
  return (
    <article className='languageCard'>
      {/* LOGO */}
      <div className='languageCard__icon-mask'>
        <img className='languageCard__icon' src={icon} alt="" />
      </div>

      {/* TITULO */}
      <span className="languageCard__title">{name}</span>

      {/* NUMERO DE EJERCICIOS */}
      <p className='languageCard__number'>5/20 Retos completados</p>

      {/* BARRA DE EJERCICIOS COMPLETADOS */}
      <div className='languageCard__bar'></div>
      
      {/* BOTON ENTRAR */}
      <div className='languageCard__button-container'>
        <Link className='languageCard__button' to={`/practice/${name}`}>Repaso</Link>
        <Link className='languageCard__button' to={`/language/${name}`}>Retos</Link>
      </div>

    </article>
  )
}

export default LanguageCard
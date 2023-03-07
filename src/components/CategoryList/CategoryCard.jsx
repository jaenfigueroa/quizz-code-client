import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import './CategoryCard.css'

//////////////////////////////////////
const CategoryCard = ({ category }) => {

  const {isAuthenticated} = useContext(AppContext)

  const { name } = category;



  //////////////////////////////////////
  return (
    // <article className={`card-language ${!isAuthenticated && 'card-language--locked'}`}>
    <article className='card-language'>
      {/* LOGO */}
      <div className='card-language__icon-mask'>
        <img className='card-language__icon' src={category.icon} alt="" />
      </div>

      {/* TITULO */}
      <span className="card-language__title">{name}</span>

      {/* NUMERO DE EJERCICIOS */}
      <p className='card-language__number'>5/20 Retos completados</p>

      {/* BARRA DE EJERCICIOS COMPLETADOS */}
      <div className='card-language__bar'></div>
      
      {/* BOTON ENTRAR */}
      <div className='card-language__button-container'>
        <Link className='card-language__button' to={`/practice/${name}`}>Repaso</Link>
        <Link className='card-language__button' to={`/category/${name}`}>Retos</Link>
      </div>

    </article>
  )
}

export default CategoryCard
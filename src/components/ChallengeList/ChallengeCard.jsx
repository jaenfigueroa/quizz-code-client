import { Link } from 'react-router-dom'
import './ChallengeCard.css'

////////////////////////////////////////////////////
const ChallengeCard = ({ challenge, category }) => {
  const { id, name } = challenge;



  ////////////////////////////////////////////////////
  return (
    <article className='challenge-card'>

      <div className='challenge-card__icon-mask'>
        <img className='challenge-card__icon' src="https://dg8krxphbh767.cloudfront.net/exercises/hello-world.svg" alt="" />
      </div>

      <div className='challenge-card__block2'>
        <span className="challenge-card__name">{name}</span>
        <p className='challenge-card__difficulty'>Facil</p>
        <p className='challenge-card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquam!</p>
      </div>

      <Link className='challenge-card__button' to={`/challenge/${category}/${id}`}>Entrar</Link>
    </article>
  )
}
export default ChallengeCard;
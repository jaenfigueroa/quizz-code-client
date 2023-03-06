import { Link } from 'react-router-dom'
import './ChallengeCard.css'

////////////////////////////////////////////////////
const ChallengeCard = ({ challenge, category }) => {
  const { id, name, lock = true } = challenge;



  ////////////////////////////////////////////////////
  return (
    <article className='challenge-card'>

      <div className='challenge-card__icon-mask'>
        <img className='challenge-card__icon' src="https://dg8krxphbh767.cloudfront.net/exercises/hello-world.svg" alt="" />
      </div>

      <div className='challenge-card__block2'>
        <span className="challenge-card__name">{name}</span>
        <div className='challenge-card__tags-container'>
          <p className='challenge-card__tag'>Facil</p>
          <p className='challenge-card__tag challenge-card__tag--blue'>Completado</p>
        </div>
        <p className='challenge-card__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquam!</p>
      </div>


      {
        lock ? (
          <Link className='challenge-card__button' to={`/challenge/${category}/${id}`}>
            <i class="fa-solid fa-chevron-right"></i> 
          </Link>
          ):(
          <Link className='challenge-card__button challenge-card__button--gray'>
            <i class="fa-solid fa-lock"></i>
          </Link>
        )
      }

    </article>
  )
}
export default ChallengeCard;
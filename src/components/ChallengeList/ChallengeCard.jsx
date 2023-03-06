import { Link } from 'react-router-dom'

const ChallengeCard = ({ challenge, category }) => {
    const { id, name } = challenge;
    return (
        <article className="section-category__container">
          <span className="section-category__challenge-name">{name}</span>
          <Link className='section-category__button' to={`/challenge/${category}/${id}`}>Entrar</Link>
        </article>
    )
}
export default ChallengeCard;
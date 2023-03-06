import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
    const { name } = category;
    return (
        <article>
            <span className="section-home__category-name">{name}</span>
            <Link className='section-home__button' to={`/category/${name}`}>Entrar</Link>
        </article>
    )
}

export default CategoryCard
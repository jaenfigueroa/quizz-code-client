import React, { useContext } from 'react'
import './Home.css'
import heroImg from '../../assets/hero2.svg'
import CategoryList from '../../components/CategoryList'
import { Contributors } from '../../components/Contributors/Contributors';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

//////////////////////////////////////////////
const categories = [
  {
    name: "HTML",
    icon: "https://camo.githubusercontent.com/c61346fb6ea6a25b03315c7a3655fdf3f0368efed773cc2cf393b3ff26a4a8d2/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f68746d6c2d312e737667"
  },
  {
    name: "CSS",
    icon: "https://camo.githubusercontent.com/d3af5ecb4b28914f8218d22ac2ca9e590e114412918e222392360c27f0039b25/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36322f435353335f6c6f676f2e737667"
  },
  {
    name: "JavaScript",
    icon: "https://camo.githubusercontent.com/19c442403fb0e923bbc655300a74ce3175f68171d9331aa9fd1d4e6b9a84977c/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f392f39392f556e6f6666696369616c5f4a6176615363726970745f6c6f676f5f322e737667"
  }
];

export const Home = () => {

  const {isAuthenticated} = useContext(AppContext)




  //////////////////////////////////////////////
  return (
    <main className='section-home'>

      {/* SECTION HERO */}
      <section className='section-home__hero'>

        <div className='section-home-1'>
          {/* <p>¡Acepta el reto y lleva tus habilidades de <span>HTML, CSS y JavaScript</span> al siguiente nivel!</p> */}
          <p>¡Acepta los retos y lleva tus habilidades de <span>HTML, CSS y JavaScript</span> al siguiente nivel!</p>
          {
            isAuthenticated ? (
              <a href='#section-categories' className='section-home__button-acept'>Aceptar</a>
            ) : (
              <Link to='/register' className='section-home__button-acept'>Aceptar</Link>
            )
          }
        </div>

        {/* <div className='section-home-2'>
          <div className='section-home__mask'>
          </div>
        </div> */}
      </section>

      {/* SECTION CATEGORIAS */}

      {
        isAuthenticated && (
          <section className='section-home__categories' id='section-categories'>
            <h5 className='component-title'>Categorias</h5>
              <CategoryList categories={categories} />
          </section>
        )
      } 


      {/* SECCION DE CONTRIBUIDORES */}
      <Contributors/>

    </main>
  )
}

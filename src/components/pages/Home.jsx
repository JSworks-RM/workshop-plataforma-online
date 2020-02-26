import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import { getAllPosts } from '../../redux/actionCreators'
import store from '../../redux/store'
import Publication from '../Organisms/Publication'

const Home = ({ posts }) => {

  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])

  return (
    <>
      <Banner 
        color="dark-color"
        image = "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg"
        title = "Bienvenido a la experiencia más increible de educación online. Comienza hoy mismo a aprender"
        subtitle = "Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estas buscando contenido de calidad. Aquí lo encontrarás"
        home
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Últimas publicaciones</h2>
          {
            posts ?
            <div>
              {
                posts.map(p => 
                  <Publication 
                    key={p.id} 
                    title={p.title}
                    author={p.author}
                    fecha={p.fecha}
                    content={p.content}
                  />)
              }
            </div>
            :
            <p>No existen publicaciones en la base de datos</p>
          }
        </div>
        <div>
          <h3>Lista de categorías</h3>
          <ul className="feature-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})

export default connect(mapStateToProps, {})(Home)

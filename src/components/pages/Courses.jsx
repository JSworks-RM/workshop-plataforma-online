import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/actionCreators'
import Card from '../Organisms/Card'

const Courses = ({ courses }) => {

  useEffect(() => {
    store.dispatch(getAllCourses())
  }, [])

  return (
    <>
      <Banner 
        color= "dark-color"
        image= {{
          src:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg",
          alt:"Banner Cursos"
        }}
        title="Nuestros cursos"
        subtitle="Comienza desde cero hoy mísmo en tu camino a dominar la tecnología"
      />

      {
        courses &&
        <main className="ed-grid m-grid-5">
          {
            courses.map(c => (
              <Card 
                key = {c.id}
                picture = {c.picture}
                name = {c.name}
              />
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProp = state => ({
  courses : state.courseReducer.courses
})

export default connect(mapStateToProp, {})(Courses)

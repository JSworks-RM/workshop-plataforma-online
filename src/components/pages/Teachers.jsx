import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import store from '../../redux/store'
import { getAllTeachers } from '../../redux/actionCreators'
import { connect } from 'react-redux'


  
const Teachers = ({ match, teachers }) => {

  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match])

  return (
    <>
      <Banner 
        color="third-color"
        image={{
          src: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg",
          alt: "Banner Profesores"
        }}
        title="Nuestros profesores"
        subtitle="Este plan docente esta altamente calificado para guiarte en la formación"
      />
      <main className="ed-grid">
        <p>
          {
            JSON.stringify(teachers)
          }
        </p>
      </main>
    </>
  )

}

const mapStateToProps = state => ({
  teachers: state.teacherReducer
})

export default connect(mapStateToProps, {})(Teachers)

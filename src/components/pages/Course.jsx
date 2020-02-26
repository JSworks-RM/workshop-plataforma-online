import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getCourse } from '../../redux/actionCreators'
import Banner from '../Organisms/Banner'

const Course = ({ course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
  }, [])

  return (
    <>
      {
        course &&
        <>
          <Banner 
            color="dark-color"
            title={course.name}
            subtitle={course.subtitle}
            image={{
              src: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg",
              alt: course.name 
            }}
            poster={course.picture}
            courseBanner
            speciality={course.data.specialities[0].name}
            info={course.information}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features"></div>
              <h2>Temario del curso</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  course.data.classes.map(cl => (
                      <div className="course-class l-section" key={cl.class.id}>
                        <h3>{cl.class.title}</h3>
                        <p>{cl.class.description}</p>
                        <ul>
                          {
                            cl.subjects.map(s => (
                            <li>{s.subject.title}</li>
                            ))
                          }
                        </ul>
                      </div>
                  ))
                }
              </div>
            </div>
            <div className="lg-cols-3">
              <h2 className="t3">Profesor:</h2>
              <p>Beto Quiroga</p>
            </div>
          </main>
        </>
      }
    </>
  )
}

const mapStateToProps = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Course)

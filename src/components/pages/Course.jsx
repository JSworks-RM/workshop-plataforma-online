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
        </>
      }
    </>
  )
}

const mapStateToProps = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Course)

import React, { createRef } from 'react'
import { NavLink } from 'react-router-dom'

const menu = createRef()
const toggleMenu = () => menu.current.classList.toggle('show') 
// toggleMenu va a acceder al elemento menu guardado como referencia y va a pedir el estado actual "current"
// con classList accede a la clase del elemento y con toggle('show) le pone la clase show si no la tiene y si la tiene se la quita

const Header = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <NavLink to="/">
            <img 
              src="https://ed.team/static/images/logo-premium.svg" 
              alt="EDLogo" 
              className="main-logo" 
            />
          </NavLink>
        </div>
        <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
          <nav className="main-menu" ref={menu}>
            <ul>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/especialidades">Especialidades</NavLink></li>
              <li><NavLink to="/cursos">Cursos</NavLink></li>
              <li><NavLink to="/profesores">Profesores</NavLink></li>
            </ul>
          </nav>
          <div 
            className="main-menu-toggle to-l"
            onClick={() => toggleMenu()}
          >

          </div>
        </div>
      </div>
    </header>
  )

export default Header

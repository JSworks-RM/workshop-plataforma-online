import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const registration = e => {
  e.preventDefault()
  const form = e.target

  const data = {
    "email": form.email.value,
    "name": form.fullname.value,
    "password": form.password.value
  }

  const API_USER_URL = process.env.REACT_APP_API_USER

  axios.post(`${API_USER_URL}/signup`, data)
    .then(res => {
      alert('Usuario creado')
      window.location = '/login'
    })
    .catch(e => alert('Error al crear usuario'))
}
 
const Register = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Crear cuenta</h1>
      <form onSubmit={registration.bind()}>
        <div className="form__item">
          <label htmlFor="email">
            Nombre completo
            <input type="text" name="fullname" id="fullname" placeholder="Ingrese nombre completo" required />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="email">
            Correo electrónico
            <input type="email" name="email" id="email" placeholder="Ingrese su e-mail" required />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Contraseña
            <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" required />
          </label>
        </div>
        <div className="form__item">
          <input type="submit" className="button full" value="Crear cuenta" />
        </div>
      </form>
      <div className="center">
        <p>¿Ya tienes cuenta de usuario? <Link to="/login">Iniciar sesión</Link></p>
      </div>
    </div>
  </div>
)

export default Register

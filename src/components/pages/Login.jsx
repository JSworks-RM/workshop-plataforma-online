import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const authentication = e => {
  e.preventDefault()
  const form = e.target

  const data = {
    email: form.email.value,
    password: form.password.value
  }

  const API_USER_URL = process.env.REACT_APP_API_USER

  axios.post(`${API_USER_URL}/login`, data)
  .then(res => {
    localStorage.setItem('token', res.data.token)
    window.location = '/'
  })
  .catch(e => {
    console.log(e)
    alert ( 'Error al iniciar sesión ')
  })
}
 
const Login = () => (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar sesión</h1>
        <form onSubmit={authentication.bind()}>
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
            <input type="submit" className="button full" value="Iniciar sesión" />
          </div>
        </form>
        <div className="center">
          <p>¿No tienes cuenta de usuario? <Link to="/registro">Crear cuenta</Link></p>
        </div>
      </div>
    </div>
)

export default Login

import React from 'react'

const Login = () => (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar sesión</h1>
        <form>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input type="email" id="email" placeholder="Ingrese su e-mail" required />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input type="password" id="password" placeholder="Ingrese su contraseña" required />
            </label>
          </div>
          <div className="form__item">
            <input type="submit" className="button full" value="Iniciar sesión" />
          </div>
        </form>
      </div>
    </div>
)

export default Login

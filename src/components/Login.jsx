import React from 'react'
import { useState } from 'react'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validacion, setValidacion] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (email.length===0 || password.length ===0){
            setValidacion('Algun campo esta vacio')
            return
        }
        alert(`Hemos obtenido los siguientes valores: \nemail: ${email} \npass: ${password}`)
        setEmail('')
        setPassword('')
    }

    const handleChangeEmail = (e)=>{
        const correo = e.target.value
        setEmail(correo)
    }

    const handleChangePassword = (e) => {
        const pass = e.target.value
        setPassword(pass)
    }
  
  return (
    <section className="page-section bg-white" id="login">
        <div className="container">
            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image">
                                    <img src="./login.jpg" alt="foto bienvenida" width="100%" height="100%" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Bienvenido de vuelta!</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control form-control-user"
                                                    id="inputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Ingrese direccion de correo..."
                                                    value={email}
                                                    onChange={handleChangeEmail}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user"
                                                    id="inputPassword"
                                                    placeholder="Contraseña"
                                                    value={password}
                                                    onChange={handleChangePassword}
                                                />
                                            </div>
                                            <div id="emailHelp" className="form-text">{validacion}
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheck"
                                                    />
                                                    <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheck"
                                                    > Recuerdame</label
                                                    >
                                                </div>
                                            </div>
                                            <button
                                            id="loginBtn"
                                            type="submit"
                                            className="btn btn-primary btn-user btn-block"
                                            >
                                            Login
                                            </button>
                                            <hr />
                                        </form>
                                        {/* <!-- <div className="text-center">
                                            <a className="small" href="forgot-password.html"
                                            >Forgot Password?</a
                                            >
                                        </div> --> */}
                                        <div className="text-center">
                                            <a className="small" href="#register"
                                            >No tengo una cuenta!</a>
                                            <br />
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
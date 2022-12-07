import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom';

export function Register() {
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (email.length===0 || password.length ===0 || nombres.length ===0 || apellidos.length ===0 || repeatPassword.length ===0){
            setValidacion('Algun campo esta vacio')
            return
        }
        let data = {
            email:email, 
            password:password,
            nombres:nombres,
            apellidos:apellidos
        }
        
        axios
            .post("http://localhost:8080/user", data)
            .then(response => {
                if (response.data.length != 0) {
                    //localStorage.setItem('user_id', response.data.userDB._id)
                    navigate('/login')
                } else {
                    alert('Invalid input data. Please, try again')
                    setValue('password', '')
                }
            })   
    }
      const handleChangeEmail = (e)=>{
      const correo = e.target.value
      setEmail(correo)
  }
    const handleChangePassword = (e) => {
      const pass = e.target.value
      setPassword(pass)
  }
    const handleChangeNombres = (e) => {
    const nombres = e.target.value
    setNombres(nombres)
}
    const handleChangeApellidos = (e) => {
    const apellidos = e.target.value
    setApellidos(apellidos)
}
    const handleChangeRepeatPassword = (e) => {
    const repeatPassword = e.target.value
    setRepeatPassword(repeatPassword)
}
  return (
    <section className="page-section bg-white" id="register">
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* <!-- Nested Row within Card Body --> */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image">
                <img src="./register.jpg" width="100%" height="100%" alt="" />
              </div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Crea una cuenta!</h1>
                  </div>
                  <form className="user" onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="Nombres"
                          value={nombres}
                          onChange={handleChangeNombres}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Apellidos"
                          value={apellidos}
                          onChange={handleChangeApellidos}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Correo electronico"
                        value={email}
                        onChange={handleChangeEmail}
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Contraseña"
                          value={password}
                          onChange={handleChangePassword}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repite la contraseña"
                          value={repeatPassword}
                          onChange={handleChangeRepeatPassword}
                        />
                      </div>
                    </div>
                    <button
                      id="registerBtn"
                      type="submit"
                      className="btn btn-primary btn-user btn-block"
                    >
                      Registrar cuenta
                    </button>
                  </form>
                  <hr />
                  {/* <!-- <div className="text-center">
                    <a className="small" href="forgot-password.html"
                      >Forgot Password?</a
                    >
                  </div> --> */}
                  <div className="text-center">
                    <a className="small" href="/login"
                      >Tienes una cuenta? ingresa!</a
                    >
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
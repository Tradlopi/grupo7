import React from 'react'

export function Register() {
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
                  <form className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="Nombres"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Apellidos"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Correo electronico"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Contraseña"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repite la contraseña"
                        />
                      </div>
                    </div>
                    <button
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
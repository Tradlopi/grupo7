import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


export function ActualizacionOrdenes() {
    const navigate = useNavigate();
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate('/ListaOrdenes')
    }
  return (
    <section className="page-section bg-white" id="create">
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
               
            <div className="col-lg-12">
                <div className="p-5">
                  <Link className="btn btn-link books-home__create" to='/Login'>Cerrar sesión</Link>
                  <br />
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Actualización de Órdenes (Recogida)</h1>
                    </div>
                </div>
            </div>
            <form className="orden" onSubmit={handleSubmit}>
                  <div className="form-group row" align="left">
                  <label className="col-sm-2 col-form-label">Fecha y hora</label>                    
                  <div className="col-sm-10">
                      <input
                      type="datetime-local"
                      />
                  </div>
                  </div>

            <div className="col-lg-12" align="left">
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Estado
                    </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Guardado</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Cumplido</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Cancelado</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                <br />
            </div>
                  <div className="row">
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Largo"/>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Ancho"/>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Alto"/>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Peso"/>
                    </div>
                  </div>
                  <br />
                
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Dirección Recogida</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputEmail3" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Ciudad Recogida</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputEmail3" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Nombre Destinatario</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputEmail3" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Cédula / NIT destinatario</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputEmail3" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Dirección entrega</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputEmail3" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Ciudad entrega</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputEmail3" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    
                    <button
                      className="btn btn-primary btn-block books-home__create"
                    >
                      Actualizar Orden
                    </button>
                  </form>
                  </div>
                </div>
              </div>
    </section>
  )
}
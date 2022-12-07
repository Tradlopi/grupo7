import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios";
import { useState } from 'react';


export function ActualizacionOrdenes() {
    const [direccion1, setDireccion1] = useState('')
    const [ciudad1, setCiudad1] = useState('')
    const [nombre, setNombre] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [direccion2, setDireccion2] = useState('')
    const [ciudad2, setCiudad2] = useState('')
    const [largo, setLargo] = useState('')
    const [alto, setAlto] = useState('')
    const [ancho, setAncho] = useState('')
    const [peso, setPeso] = useState('')
    const [fecha, setFecha] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (direccion1.length===0 || ciudad1.length ===0 || nombre.length ===0 || identificacion.length ===0 || direccion2.length ===0 || ciudad2.length ===0 
          || largo.length ===0 || ancho.length ===0 || alto.length ===0 || peso.length ===0 || fecha.length ===0){
          setValidacion('Algun campo esta vacio')
          return
      }
      let data = {
          largo:largo, 
          ancho:ancho,
          alto:alto,
          peso:peso,
          direccionRecogida:direccion1,
          ciudadRecogida:ciudad1,
          destinatario:nombre,
          identificacion:identificacion,
          direccionEntrega:direccion2,
          ciudadEntrega:ciudad2,
          fecha:fecha
      }
      
      axios
          .post("http://localhost:8080/order", data)
          .then(response => {
              if (response.data.length != 0) {
                  navigate('/ListaOrdenes')
              } else {
                  alert('Invalid input data. Please, try again')
                  
              }
          })   
    }
    const handleChangeLargo = (e)=>{
    const largo = e.target.value
    setLargo(largo)
    }
    const handleChangeAncho = (e) => {
    const ancho = e.target.value
    setAncho(ancho)
    }
    const handleChangeAlto = (e) => {
    const alto = e.target.value
    setAlto(alto)
    }
    const handleChangePeso = (e) => {
    const peso = e.target.value
    setPeso(peso)
    }
    const handleChangeDireccion1 = (e) => {
    const direccion1 = e.target.value
    setDireccion1(direccion1)
    }
    const handleChangeDireccion2 = (e) => {
    const direccion2 = e.target.value
    setDireccion2(direccion2)
    }
    const handleChangeCiudad1 = (e) => {
    const ciudad1 = e.target.value
    setCiudad1(ciudad1)
    }
    const handleChangeCiudad2 = (e) => {
    const ciudad2 = e.target.value
    setCiudad2(ciudad2)
    }
    const handleChangeNombre = (e) => {
    const nombre = e.target.value
    setNombre(nombre)
    }
    const handleChangeIdentificacion = (e) => {
    const identificacion = e.target.value
    setIdentificacion(identificacion)
    }
    const handleChangeFecha = (e) => {
    const fecha = e.target.value
    setFecha(fecha)
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
                      value={fecha} 
                      onChange={handleChangeFecha}
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
                    <input type="text" className="form-control" placeholder="Largo" value={largo} onChange={handleChangeLargo}/>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Ancho" value={ancho} onChange={handleChangeAncho}/>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Alto" value={alto} onChange={handleChangeAlto}/>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Peso" value={peso} onChange={handleChangePeso}/>
                    </div>
                  </div>
                  <br />
                
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Dirección Recogida</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="address1" 
                        placeholder=""
                        value={direccion1}
                        onChange={handleChangeDireccion1}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Ciudad Recogida</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="city1" 
                        placeholder=""
                        value={ciudad1}
                        onChange={handleChangeCiudad1}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Nombre Destinatario</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder=""
                        value={nombre}
                        onChange={handleChangeNombre}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Cédula / NIT destinatario</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="identification" 
                        placeholder=""
                        value={identificacion}
                        onChange={handleChangeIdentificacion}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Dirección entrega</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="address2" 
                        placeholder=""
                        value={direccion2}
                        onChange={handleChangeDireccion2}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Ciudad entrega</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="city2" 
                        placeholder=""
                        value={ciudad2}
                        onChange={handleChangeCiudad2}
                        />
                      </div>
                    </div>
                    
                    <button
                      id="updateBtn"
                      type="submit"
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
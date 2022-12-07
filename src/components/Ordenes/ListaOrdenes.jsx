import React from 'react'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

let lstOrdenes=[]
const labels = [
    
    "No. Servicio",
    "Fecha",
    "Ciudad de Entrega",
    "Dirección de Entrega",
    "Estado"
    
]

export function ListaOrdenes() {
    const [lstOrdenes, setlstOrdenes] = useState(null)
    const [update] = useState(false)

    useEffect(() => {
    
    axios
            .get("http://localhost:8080/orders")
            .then(response => {
                    setlstOrdenes(response.data.data)
                
            })  
  
    }, [update])

    return (
    <>
            <div>
                <Link className="btn btn-link books-home__create" to='/Login'>Cerrar sesión</Link>
                <br />     
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {labels.map((label, index) => {
                                return (<th key={index} scope="col">{label}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>

                        {lstOrdenes !== null ? lstOrdenes.map((orden, index) => {
                            
                            return (
                                <tr key={index}>
                                    
                                    <td>{orden.noServicio}</td>
                                    <td>{orden.fecha}</td>
                                    <td>{orden.ciudadEntrega}</td>
                                    <td>{orden.direccionEntrega}</td>
                                    <td>{orden.estado}</td>
                                    <td className="d-flex gap-2 justify-content-center">
                                        <Link className="btn btn-success" to={'/ActualizacionOrdenes/' + orden._id}>Actualizar</Link>
                                    </td>
                                </tr>)
                        }) : ''}
                    </tbody>
                </table>
                <Link className="btn btn-primary books-home__create" to='/CreacionOrdenes'>Crear nueva orden</Link>
                <br /> 
            </div>
            
        </>
  )
}
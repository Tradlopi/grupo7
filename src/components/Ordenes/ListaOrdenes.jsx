import React from 'react'
import { Link } from "react-router-dom"

const lstOrdenes = [
    {
        id: 1,
        noServicio: '1',
        fecha: '11/11/2022',
        ciudadEntrega: 'Barranquilla',
        direccionEntrega: 'Calle 1 #12-54',
        estado: 'Guardado'
    },
    {
        id: 2,
        noServicio: '2',
        fecha: '15/11/2022',
        ciudadEntrega: 'Bogotá',
        direccionEntrega: 'Carrera 13 #5-36',
        estado: 'Cancelado'
      },
      {
        id: 3,
        noServicio: '3',
        fecha: '20/12/2022',
        ciudadEntrega: 'Cartagena',
        direccionEntrega: 'Calle 1A #12-75',
        estado: 'Cumplido'
    }]

const labels = [
    
    "No. Servicio",
    "Fecha",
    "Ciudad de Entrega",
    "Dirección de Entrega",
    "Estado"
    
]

export function ListaOrdenes() {
  return (
    <>
            <div>
                <Link className="btn btn-primary books-home__create" to='/CreacionOrdenes'>Crear nueva orden</Link>
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
                        {lstOrdenes.map((orden, index) => {
                            return (
                                <tr key={index}>
                                    
                                    <td>{orden.noServicio}</td>
                                    <td>{orden.fecha}</td>
                                    <td>{orden.ciudadEntrega}</td>
                                    <td>{orden.direccionEntrega}</td>
                                    <td>{orden.estado}</td>
                                    <td className="d-flex gap-2 justify-content-center">
                                        <Link className="btn btn-success" to={'/ActualizacionOrdenes/' + orden.id}>Actualizar</Link>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
            
        </>
  )
}
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


function Reservas() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const [fetchedData, setFetchedData] = useState([]);
    const [idSeleccionado, setIdSeleccionado] = React.useState(0);

    var horarios = {

        0: [{ id: 0, hora: '8:00 a.m.', estado: 1 }, { id: 1, hora: '9:00 a.m.', estado: 1 }, { id: 2, hora: '10:00 a.m.', estado: 0 }, { id: 3, hora: '11:00 a.m.', estado: 1 }, { id: 4, hora: '12:00 a.m.', estado: 0 }, { id: 5, hora: '1:00 p.m.', estado: 0 }, { id: 6, hora: '2:00 p.m.', estado: 1 }, { id: 7, hora: '3:00 p.m.', estado: 0 }, { id: 8, hora: '4:00 p.m.', estado: 0 }, { id: 9, hora: '5:00 p.m.', estado: 0 }, { id: 10, hora: '6:00 p.m.', estado: 1 }, { id: 11, hora: '7:00 p.m.', estado: 1 }],
        1: [{ id: 0, hora: '8:00 a.m.', estado: 0 }, { id: 1, hora: '9:00 a.m.', estado: 0 }, { id: 2, hora: '10:00 a.m.', estado: 1 }, { id: 3, hora: '11:00 a.m.', estado: 1 }, { id: 4, hora: '12:00 a.m.', estado: 1 }, { id: 5, hora: '1:00 p.m.', estado: 1 }, { id: 6, hora: '2:00 p.m.', estado: 0 }, { id: 7, hora: '3:00 p.m.', estado: 0 }, { id: 8, hora: '4:00 p.m.', estado: 1 }, { id: 9, hora: '5:00 p.m.', estado: 1 }, { id: 10, hora: '6:00 p.m.', estado: 0 }, { id: 11, hora: '7:00 p.m.', estado: 0 }],
        2: [{ id: 0, hora: '8:00 a.m.', estado: 1 }, { id: 1, hora: '9:00 a.m.', estado: 0 }, { id: 2, hora: '10:00 a.m.', estado: 1 }, { id: 3, hora: '11:00 a.m.', estado: 0 }, { id: 4, hora: '12:00 a.m.', estado: 1 }, { id: 5, hora: '1:00 p.m.', estado: 0 }, { id: 6, hora: '2:00 p.m.', estado: 1 }, { id: 7, hora: '3:00 p.m.', estado: 0 }, { id: 8, hora: '4:00 p.m.', estado: 1 }, { id: 9, hora: '5:00 p.m.', estado: 0 }, { id: 10, hora: '6:00 p.m.', estado: 1 }, { id: 11, hora: '7:00 p.m.', estado: 0 }],
        3: [{ id: 0, hora: '8:00 a.m.', estado: 1 }, { id: 1, hora: '9:00 a.m.', estado: 1 }, { id: 2, hora: '10:00 a.m.', estado: 1 }, { id: 3, hora: '11:00 a.m.', estado: 1 }, { id: 4, hora: '12:00 a.m.', estado: 1 }, { id: 5, hora: '1:00 p.m.', estado: 1 }, { id: 6, hora: '2:00 p.m.', estado: 1 }, { id: 7, hora: '3:00 p.m.', estado: 1 }, { id: 8, hora: '4:00 p.m.', estado: 1 }, { id: 9, hora: '5:00 p.m.', estado: 1 }, { id: 10, hora: '6:00 p.m.', estado: 1 }, { id: 11, hora: '7:00 p.m.', estado: 1 }]

    };

    const getData = async (id) => {
        const respuesta = await axios.get(
            `http://localhost:3900/api/servicio/${id}`

        );
        setFetchedData(respuesta.data);
    };

    const Procesar = (id) => {

        let codigos = ["61c146de5ee34e8bba1584bc", "61c255a99d2a7eb45ab1e6d4", "61c24f829d2a7eb45ab1e6d1", "61c24fc99d2a7eb45ab1e6d2"];
     
        setIdSeleccionado(id);

        getData(codigos[id]);


    }

    function sayHello(hora) {
        

        swal({
            title: '¿Realizar reserva?',
            text: `Esta seguro de realizar la reserva a las: ${hora}`,
          })
        
    }

    const Prueba_Hora2 = () => {

        return (

            <>
                {

                    horarios[idSeleccionado].map(item => (

                        (!item.estado) ? (

                            <div className="d-flex justify-content-between">
                                <div className="align-self-center">
                                    <p className="m-0">{item.hora}</p>
                                </div>
                                <div>
                                    <button type="button" className="btn rounded" onClick={() => sayHello(item.hora)}>Reservar</button>
                                </div>
                            </div>

                        ) :

                            <div className="d-flex justify-content-between">
                                <div className="align-self-center">
                                    <p className="m-0 text-muted">{item.hora}</p>
                                </div>
                                <div>
                                    <button type="button" className="btn rounded disabled">Reservar</button>
                                </div>
                            </div>

                    ))

                }
            </>

        );

    }

    return (

        <div className="container mt-5">
            <div className="contenedor">
                <div>
                    <select id="servicios" className="form-select shadow-none" aria-label="Default select example" onChange={e => Procesar(e.target.value)}>
                        <option slected value="0">Afeitado</option>
                        <option value="1">Barba</option>
                        <option value="2">Corte</option>
                        <option value="3">Mascarilla puntos negros</option>
                    </select>
                </div>
                <div className="d-flex justify-content-between">
                    <h3 className="horarios">Horarios</h3>
                    <p>Para hoy: {date}</p>
                </div>
                <div>
                    <div className="accordion accordion-flush" id="faqlist">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                    Descripción
                                </button>
                            </h2>
                            <div id="faq-content-1" className="accordion-collapse collapse show" data-bs-parent="#faqlist">
                                <div className="accordion-body">
                                    <p id="descripcion">{fetchedData.servicios ? fetchedData.servicios.descripcion : "Cargando..."}</p>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div><p className="m-0"><i id="duracion" className="far fa-clock fa-lg me-2"></i>Duracion promedio: {fetchedData.servicios ? fetchedData.servicios.duracion : "Cargando..."}</p></div>
                                        <div><p className="m-0"><i id="icono-dinero" className="far fa-money-bill-alt fa-lg me-2"></i>Valor: ${fetchedData.servicios ? fetchedData.servicios.costo : "Cargando..."}</p></div>
                                        <div><p className="m-0"><i className="fas fa-venus-mars fa-lg me-2"></i>Genero: {fetchedData.servicios ? fetchedData.servicios.genero : "Cargando..."}</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                    Calificaciones
                                </button>
                            </h2>
                            <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div id="calificacion" className="accordion-body d-flex flex-column gap-3">
                                    <div className="d-flex justify-content-start gap-2">
                                        <div id="puntaje" className="align-self-start d-flex flex-column gap-1">
                                            <div>
                                                <p className="m-0">Calificación General</p>
                                            </div>
                                            <div>
                                                <h3 className="m-0"><i id="estrella" className="bi bi-star-fill me-2"></i>4.8</h3>
                                            </div>
                                        </div>
                                        <div className="align-self-start d-flex flex-column gap-1">
                                            <div>
                                                Todas
                                            </div>
                                            <div>
                                                <h3 className="m-0">124</h3>
                                            </div>
                                        </div>
                                        {/*<div className="align-self-start d-flex flex-column gap-1">
                                            <div>
                                                Positivas
                                            </div>
                                            <div>
                                                <h3 className="m-0">93%</h3>
                                            </div>
                                        </div>*/}
                                        <div className="align-self-start d-flex flex-column gap-1">
                                            <div>
                                                Reseñas
                                            </div>
                                            <div>
                                                <h3 className="m-0">10</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        Estos datos son generados por calificaciones efectuadas por clientes verificados.Los cuales hicieron su respectiva reserva y tomaron el servicio.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contenedor-citas border p-2 d-flex flex-column gap-3 overflow-auto">
                    <Prueba_Hora2 />
                </div>
            </div>
        </div>

    )

}

export default Reservas;
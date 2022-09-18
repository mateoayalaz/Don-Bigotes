import React, { Component, useState } from 'react';
import axios from 'axios';

function Reservas() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    var serviceArray
    const getServicio = (id_servicio) => {

        axios.get(`http://localhost:3900/api/servicio/${id_servicio}`)
        .then(response => {
            serviceArray=response.data.servicios
            console.log(serviceArray);
            alert(  JSON.stringify(serviceArray.name)  );

        });


    }

    function sayHello(name) {
        alert(`hello, ${name}`);
    }

    var servicios = [

        {id: 0, nombre: "Afeitado", descripcion: "Afeitado de Barbero tradicional, con cuchilla o navaja clásica. Se suministramos calor para abrir el poro de la piel en tu barba primero, luego ponemos la crema de afeitar con brocha de tejón. Finalmente se aplica una loción para después del afeitado que calme la piel mientras se hace un masaje para reactivar la circulación.", duracion: "15:00 min.", genero: "Masculino", precio: 8000},

        {id: 1, nombre: "Barba", descripcion: "Servicio especializado en el arreglo de barba, asesorando el diseño y la forma más adecuada para el rostro del cliente. Usamos tanto técnicas de máquina como de navaja clásica para crear el diseño, dependiendo de las características particulares de la propia barba.", duracion: "30:00 min.", genero: "Masculino", precio: 15000},

        {id: 2, nombre: "Corte", descripcion: "Corte sencillo con tijera o maquina, una perfecta combinación de lo clásico con lo moderno con un toque de elegancia se suma a un ritual único, donde el Barbero busca dar la mejor apariencia adaptando lo genérico de un corte o peinado a lo particular de cada cliente, y su gusto.", duracion: "40:00 min.", genero: "Masculino", precio: 12000},

        {id: 3, nombre: "Mascarilla puntos negros", descripcion: "Mascarilla hidroplástica negra, perfecta para combatir los puntos negros y remover impurezas del rostro. Combinado extracto de aloe vera y una fórmula a base de ácido hialurónico, indicada para todo tipo de piel.", duracion: "17:00 min.", genero: "Unisex", precio: 15000}

    ];

    const [idSeleccionado, setIdSeleccionado] = React.useState(0);
    let servicio = servicios[idSeleccionado];
   
    /* --------------------------------------------------------------------- */

    /*
    var horarios = [[1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1], [0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1], [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0]];

    var array_A_Usar = horarios[idSeleccionado];

    const Prueba_Hora = ({ estado, hora }) => {

        return (

            <>{!estado ? (

                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <p className="m-0">{hora}</p>
                    </div>
                    <div>
                        <button type="button" className="btn rounded">Reservar</button>
                    </div>
                </div>

            ) :

                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <p className="m-0 text-muted">{hora}</p>
                    </div>
                    <div>
                        <button type="button" className="btn rounded disabled">Reservar</button>
                    </div>
                </div>

            }</>

        );

    }
    */

    var horarios = { 
        
        0: [{ id: 0, hora: '8:00 a.m.', estado: 1 }, { id: 1, hora: '9:00 a.m.', estado: 1 }, { id: 2, hora: '10:00 a.m.', estado: 0 }, { id: 3, hora: '11:00 a.m.', estado: 1 }, { id: 4, hora: '12:00 a.m.', estado: 0 }, { id: 5, hora: '1:00 p.m.', estado: 0 }, { id: 6, hora: '2:00 p.m.', estado: 1 }, { id: 7, hora: '3:00 p.m.', estado: 0 }, { id: 8, hora: '4:00 p.m.', estado: 0 }, { id: 9, hora: '5:00 p.m.', estado: 0 }, { id: 10, hora: '6:00 p.m.', estado: 1 }, { id: 11, hora: '7:00 p.m.', estado: 1 }],
        1: [{ id: 0, hora: '8:00 a.m.', estado: 0 }, { id: 1, hora: '9:00 a.m.', estado: 0 }, { id: 2, hora: '10:00 a.m.', estado: 1 }, { id: 3, hora: '11:00 a.m.', estado: 1 }, { id: 4, hora: '12:00 a.m.', estado: 1 }, { id: 5, hora: '1:00 p.m.', estado: 1 }, { id: 6, hora: '2:00 p.m.', estado: 0 }, { id: 7, hora: '3:00 p.m.', estado: 0 }, { id: 8, hora: '4:00 p.m.', estado: 1 }, { id: 9, hora: '5:00 p.m.', estado: 1 }, { id: 10, hora: '6:00 p.m.', estado: 0 }, { id: 11, hora: '7:00 p.m.', estado: 0 }], 
        2: [{ id: 0, hora: '8:00 a.m.', estado: 1 }, { id: 1, hora: '9:00 a.m.', estado: 0 }, { id: 2, hora: '10:00 a.m.', estado: 1 }, { id: 3, hora: '11:00 a.m.', estado: 0 }, { id: 4, hora: '12:00 a.m.', estado: 1 }, { id: 5, hora: '1:00 p.m.', estado: 0 }, { id: 6, hora: '2:00 p.m.', estado: 1 }, { id: 7, hora: '3:00 p.m.', estado: 0 }, { id: 8, hora: '4:00 p.m.', estado: 1 }, { id: 9, hora: '5:00 p.m.', estado: 0 }, { id: 10, hora: '6:00 p.m.', estado: 1 }, { id: 11, hora: '7:00 p.m.', estado: 0 }], 
        3: [{ id: 0, hora: '8:00 a.m.', estado: 1 }, { id: 1, hora: '9:00 a.m.', estado: 1 }, { id: 2, hora: '10:00 a.m.', estado: 0 }, { id: 3, hora: '11:00 a.m.', estado: 1 }, { id: 4, hora: '12:00 a.m.', estado: 0 }, { id: 5, hora: '1:00 p.m.', estado: 0 }, { id: 6, hora: '2:00 p.m.', estado: 1 }, { id: 7, hora: '3:00 p.m.', estado: 0 }, { id: 8, hora: '4:00 p.m.', estado: 0 }, { id: 9, hora: '5:00 p.m.', estado: 0 }, { id: 10, hora: '6:00 p.m.', estado: 1 }, { id: 11, hora: '7:00 p.m.', estado: 1 }]
    
    };

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
                                    <button type="button" className="btn rounded">Reservar</button>
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
            <button onClick={() => getServicio('61b816c3744f6d93fece8b0b')}>Greet</button>
            <div className="contenedor">
                <div>
                    <select id="servicios" className="form-select shadow-none" aria-label="Default select example" onChange={e => setIdSeleccionado(e.target.value)}>
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
                                    <p id="descripcion">{servicio.descripcion}</p>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div><p className="m-0"><i id="duracion" className="far fa-clock fa-lg me-2"></i>Duracion promedio: {servicio.duracion}</p></div>
                                        <div><p className="m-0"><i id="icono-dinero" className="far fa-money-bill-alt fa-lg me-2"></i>Valor: ${servicio.precio}</p></div>
                                        <div><p className="m-0"><i className="fas fa-venus-mars fa-lg me-2"></i>Genero: {servicio.genero}</p></div>
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
                                        <div className="align-self-start d-flex flex-column gap-1">
                                            <div>
                                                Positivas
                                            </div>
                                            <div>
                                                <h3 className="m-0">93%</h3>
                                            </div>
                                        </div>
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
                    <Prueba_Hora2/>
                </div>
            </div>
        </div>

    )

}

export default Reservas;
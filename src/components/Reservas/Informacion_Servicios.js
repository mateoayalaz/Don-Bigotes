import React from 'react';

function Contenedor_Informacion_Servicios() {

    var servicios = [

        { id: 0, nombre: "Afeitado", descripcion: "Afeitado con cuchilla.", duracion: "15:00 min", precio: 8000 },

        { id: 1, nombre: "Barba", descripcion: "Recorte y delineado de barba.", duracion: "30:00 min", precio: 15000 },

        { id: 2, nombre: "Corte", descripcion: "Corte sencillo con tijera o maquina", duracion: "40:00 min", precio: 12000 }

    ];

    const [idSeleccionado, setIdSeleccionado] = React.useState(0);
    let servicio = servicios[idSeleccionado];

    return (

        <div className="d-flex flex-column align-self-start gap-3">
            <div>
                <select id="servicios" className="form-select shadow-none" aria-label="Default select example" onChange={e=>setIdSeleccionado(e.target.value)}>
                    <option className="holi" slected value="0">Afeitado</option>
                    <option value="1">Barba</option>
                    <option value="2">Corte</option>
                </select>
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
                                    <div><p className="m-0"><i id="icono-dinero" className="far fa-money-bill-alt fa-lg me-2"></i>Valor: {servicio.precio}</p></div>
                                    <div><p className="m-0"><i id="personal" className="fas fa-user-friends me-2"></i>Personal disponible: 4</p></div>
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
        </div>

    );

}

export default Contenedor_Informacion_Servicios;
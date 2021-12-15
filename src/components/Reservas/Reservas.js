import React from 'react';

function Reservas() {

    return (

        <div className="container mt-5">
        <div className="contenedor">
            <div>
                <select className="form-select shadow-none" aria-label="Default select example">
                    <option slected value="Afeitado">Afeitado</option>
                    <option value="Barba">Barba</option>
                    <option value="Corte">Corte</option>
                </select>
            </div>
            <div className="d-flex justify-content-between">
                <h3 className="horarios">Horarios</h3>
                <p>Para hoy: 9/12/2021</p>
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                <div className="d-flex justify-content-between mt-4">
                                    <div><p className="m-0"><i id="duracion" className="far fa-clock fa-lg me-2"></i>Duracion promedio: 0:00 min</p></div>
                                    <div><p className="m-0"><i id="icono-dinero" className="far fa-money-bill-alt fa-lg me-2"></i>Valor: $00:000</p></div>
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
            <div className="contenedor-citas border p-2 d-flex flex-column gap-3 overflow-auto">
                
                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <p className="m-0">1:00 p.m.</p>
                    </div>
                    <div>
                        <button type="button" className="btn rounded">Reservar</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <p className="m-0">2:00 p.m.</p>
                    </div>
                    <div>
                        <button type="button" className="btn rounded disabled">Reservar</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <p className="m-0">3:00 p.m.</p>
                    </div>
                    <div>
                        <button type="button" className="btn rounded">Reservar</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <p className="m-0">4:00 p.m.</p>
                    </div>
                    <div>
                        <button type="button" className="btn rounded">Reservar</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <p className="m-0">5:00 p.m.</p>
                    </div>
                    <div>
                        <button type="button" className="btn rounded">Reservar</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <p className="m-0">6:00 p.m.</p>
                    </div>
                    <div>
                        <button type="button" className="btn rounded">Reservar</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <p className="m-0">7:00 p.m.</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-dark rounded">Reservar</button>
                    </div>
                </div>
               

            </div>
        </div>
    </div>

    )

}

export default Reservas;
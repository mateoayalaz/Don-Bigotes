import React from 'react';


function Horarios_Disponoble_Servicio() {

    var horarios_Disponibles = [0,0,0,1,0,0,1,0,0,0,1,1];

    return (

        <div class="d-flex flex-column align-self-start gap-3">
            <div class="d-flex justify-content-between">
                <h3 class="horarios">Horarios</h3>
                <p class="m-0">Para hoy: 9/12/2021</p>
            </div>
            <div>
                <div class="contenedor-citas border p-2 d-flex flex-column gap-3 overflow-auto">
                    <div class="d-flex justify-content-between">
                        <div class="align-self-center">
                            <p class="m-0">1:00 p.m.</p>
                        </div>
                        <div>
                            <button type="button" class="btn rounded">Reservar</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="align-self-center">
                            <p class="m-0">2:00 p.m.</p>
                        </div>
                        <div>
                            <button type="button" class="btn rounded disabled">Reservar</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="align-self-center">
                            <p class="m-0">3:00 p.m.</p>
                        </div>
                        <div>
                            <button type="button" class="btn rounded">Reservar</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="align-self-center">
                            <p class="m-0">4:00 p.m.</p>
                        </div>
                        <div>
                            <button type="button" class="btn rounded">Reservar</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="align-self-center">
                            <p class="m-0">5:00 p.m.</p>
                        </div>
                        <div>
                            <button type="button" class="btn rounded">Reservar</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="align-self-center">
                            <p class="m-0">6:00 p.m.</p>
                        </div>
                        <div>
                            <button type="button" class="btn rounded">Reservar</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="align-self-center">
                            <p class="m-0">7:00 p.m.</p>
                        </div>
                        <div>
                            <button type="button" class="btn btn-dark rounded">Reservar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Horarios_Disponoble_Servicio;
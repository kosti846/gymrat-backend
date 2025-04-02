interface CreateCalentamientoDTO{
    readonly repeticiones: number;
    readonly resistencia: number;
    readonly series: number;  

}


class CalentamientoDTO implements CreateCalentamientoDTO {

    readonly repeticiones: number;
    readonly resistencia: number;
    readonly series: number; 

    constructor(repeticiones: number, resistencia: number, series: number) {
        this.repeticiones = repeticiones;
        this.resistencia = resistencia;
        this.series = series;  
    };
};

const newCalentamientoDTO = new CalentamientoDTO(15, 25, 24);

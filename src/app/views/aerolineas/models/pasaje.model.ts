export class PasajeModel{
    _id : string = '';
    Pasajero: string = '';
    Clase: string = '';
    Asiento: string = '';
    Origen: string = '';
    Destino: string = '';
    Precio: number = 0;
    Fecha_partida: Date = new Date(); 
    Fecha_llegada: Date = new Date(); 
    vuelo: string = '';
    usuario: string = '';
}

import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { VueloModel } from '../models/vuelo.model';
import { PasajeModel } from "../models/pasaje.model";
//import {Reporte1} from "../models/reporte1.model";
@Injectable(
    {
        providedIn:'root'
    }
)
export class PasajeService{
    /**
     *
     */
    private API_URL='http://localhost:8000/pasaje';

    constructor(private http: HttpClient) {    
    }
    
    getTodosLosPasajes (): Observable<PasajeModel[]>{
        return this.http.get<PasajeModel[]>(`${this.API_URL}/traerPasajes`);
        
    }

    agregarPasaje(pasaje: PasajeModel) : Observable<PasajeModel> {
        return this.http.post<PasajeModel>(`${this.API_URL}/crearPasaje`, pasaje);
      }
    
    editarPasaje(pasaje: PasajeModel) : Observable<PasajeModel> {
        return this.http.put<PasajeModel>(`${this.API_URL}/editar/${pasaje._id}`, pasaje);
    }
  
    
    eliminarPasaje(idPasaje : string) : Observable<PasajeModel> {
        console.log(idPasaje);
        // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
        return this.http.delete<PasajeModel>(this.API_URL+'/eliminar/'+idPasaje);
    
    }

    /*reporte1():Observable<Reporte1>{
        return this.http.get<Reporte1>(this.API_URL+'/ingresoPorVuelo');
    }*/
    

    
}
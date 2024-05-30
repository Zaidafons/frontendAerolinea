import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable, map } from "rxjs";
import { VueloModel } from "../models/vuelo.model";
@Injectable(
    {
        providedIn:'root'
    }
)
export class VueloService{
    /**
     *
     */
    private API_URL='http://localhost:8000/vuelo';

    constructor(private http: HttpClient) {    
    }
    
    getTodosLosVuelos (): Observable<VueloModel[]>{
        return this.http.get<VueloModel[]>(`${this.API_URL}/traerVuelos`);
        
    }
    getIdsVuelos(): Observable<number[]> {
        return this.http.get<VueloModel[]>(`${this.API_URL}/vuelos`).pipe(
          map(vuelos => vuelos.map(vuelo => vuelo._id))
        );
    }
}
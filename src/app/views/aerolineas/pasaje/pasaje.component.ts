import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, FormSelectDirective } from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { PasajeModel } from "../models/pasaje.model";
import {PasajeService} from "../services/pasaje.service";
import { VueloService } from '../services/vuelo.service';
import { VueloModel } from '../models/vuelo.model';
@Component({
  selector: 'app-pasaje',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, 
    CardComponent, CardHeaderComponent, CardBodyComponent,
     DocsExampleComponent, ReactiveFormsModule, FormsModule, 
     FormDirective, FormLabelDirective, FormControlDirective,
      ButtonDirective, NgStyle,FormSelectDirective, ReactiveFormsModule, ButtonDirective, IconDirective, RouterLink, FormSelectDirective],
  templateUrl: './pasaje.component.html',
  styleUrl: './pasaje.component.scss'
})
export class PasajeComponent {
    pasajeModelo: PasajeModel=new PasajeModel();
    vuelosLista:VueloModel[]=[];
    listaPasajes: PasajeModel[] = [];
    listaVuelos: VueloModel[] = [];

  //idsVuelos: number[] = [];

  constructor(private pasajeService : PasajeService, private vuelosService : VueloService) { 
    this.getPasajes();

    this.llenarComboPasajes();
    
  }
  getPasajes() {
    this.pasajeService.getTodosLosPasajes().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.listaPasajes = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  convertirFechaParaInput(fecha: Date): string {
    if (!fecha) {
      return '';
    }
    const fechaObj = new Date(fecha);
    const year = fechaObj.getFullYear();
    const month = ('0' + (fechaObj.getMonth() + 1)).slice(-2);
    const day = ('0' + fechaObj.getDate()).slice(-2);
    const hours = ('0' + fechaObj.getHours()).slice(-2);
    const minutes = ('0' + fechaObj.getMinutes()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }



  guardarPasaje(){
    console.log(this.pasajeModelo);
    this.pasajeService.agregarPasaje(this.pasajeModelo).subscribe({
      next:(respuesta)=>{
          console.log("Se guardo", respuesta);
      }
    })
    
  }


  editarPasaje(pasaje: PasajeModel){
    this.pasajeModelo=pasaje;
    this.pasajeService.editarPasaje(this.pasajeModelo).subscribe({
      next:(respuesta)=>{
        console.log("Se edito correctamente", respuesta);
        this.getPasajes();
        this.pasajeModelo=new PasajeModel();
      },
      error: (error)=>{
        console.log(error);
      }
      
    })
  }




  private llenarComboPasajes(){
    this.vuelosService.getTodosLosVuelos().subscribe({
      next:(res)=>{
        this.vuelosLista=res;
      },
      error:(error)=>{
        console.error(error)
      }
    });
  }
  
  /*ngOnInit(): void {
    this.obtenerIdsVuelos();
  }

  /*obtenerIdsVuelos(): void {
    this.vueloService.getIdsVuelos().subscribe({
      next: (ids) => {
        this.idsVuelos = ids;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }*/
}

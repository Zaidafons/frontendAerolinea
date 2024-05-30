import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, FormSelectDirective, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { PasajeModel } from "../models/pasaje.model";
import {PasajeService} from "../services/pasaje.service";
import {VueloModel } from "../models/vuelo.model";
import {VueloService} from "../services/vuelo.service";

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, 
    CardComponent, CardHeaderComponent, CardBodyComponent,
     DocsExampleComponent, ReactiveFormsModule, FormsModule, 
     FormDirective, FormLabelDirective, FormControlDirective,
      ButtonDirective, NgStyle,FormSelectDirective, ReactiveFormsModule, ButtonDirective, IconDirective, RouterLink, 
      TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  pasajeModelo: PasajeModel=new PasajeModel();
  listaPasajes: PasajeModel[] = [];
  listaVuelos: VueloModel[] = [];

  mostrarFormularioEdicion: boolean = false;
  pasajeSeleccionado: PasajeModel | null = null;



  constructor(private pasajeService: PasajeService) {
    this.getPasajes();
    
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
  
  editaPasaje(){
    console.log(this.pasajeModelo);
    this.pasajeService.editarPasaje(this.pasajeModelo).subscribe({
      next:(respuesta)=>{
          console.log("Se edito", respuesta);
      }
    })
    
  }
  editarPasaje(pasaje: PasajeModel){
    this.pasajeModelo=pasaje;
    this.pasajeService.editarPasaje(this.pasajeModelo).subscribe({
      next : (respuesta) => {
        console.log("Pasaje editado", respuesta);
        this.getPasajes();
    },
    error: (error) => {
      console.log(error);
    }
    })
   
  }

  



  eliminarPasaje(pasaje: PasajeModel){
    console.log("itema para eliminar", pasaje);
    this.pasajeService.eliminarPasaje(pasaje._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getPasajes();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  
  mostrarFormularioNuevo(){
    this.pasajeModelo=new PasajeModel();
    this.mostrarFormularioEdicion=true;
  }

}

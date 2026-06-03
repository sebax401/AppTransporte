import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
          IonTitle, IonMenuButton, IonButton, IonButtons, IonToolbar, IonHeader, IonLabel } from '@ionic/angular/standalone';

import {RouterLink} from '@angular/router';

import { VehiculoService, Vehiculo } from '../services/vehiculo';

@Component({
  selector: 'app-datos-vehiculo',
  templateUrl: './datos-vehiculo.page.html',
  styleUrls: ['./datos-vehiculo.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTitle, 
            IonMenuButton, IonButton, IonButtons, IonToolbar, IonHeader, IonLabel, CommonModule, FormsModule, RouterLink ]
})
export class DatosVehiculoPage implements OnInit {

  vehiculos: Vehiculo[] = [];

    constructor(private vehiculoService: VehiculoService) {}

        ngOnInit() {
          console.log('Home cargado');
          this.cargarVehiculos();
        }

    cargarVehiculos() {
      this.vehiculoService.obtenerVehiculos().subscribe({
        next: (data) => {
          this.vehiculos = data;
        },
        error: (error) => {
          console.log('Error al cargar vehículos', error);
        }
      });
    }

}

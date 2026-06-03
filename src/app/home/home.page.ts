import { Component } from '@angular/core';
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
          IonTitle, IonMenuButton, IonButton, IonButtons, IonToolbar, IonHeader, IonSearchbar } from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import {IonIcon} from '@ionic/angular/standalone';
import { cartOutline } from 'ionicons/icons';

import { NgFor } from '@angular/common';

import { VehiculoService, Vehiculo } from '../services/vehiculo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
             IonTitle, IonMenuButton, IonButton, IonButtons, IonToolbar, IonHeader, IonSearchbar, RouterLink, NgFor, IonIcon ],
})
export class HomePage {
  
  vehiculos: Vehiculo[] = [];

    constructor(private vehiculoService: VehiculoService) {
      addIcons({ cartOutline });
    }

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

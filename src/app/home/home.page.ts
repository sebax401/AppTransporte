import { Component } from '@angular/core';
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
          IonTitle, IonMenuButton, IonButton, IonButtons, IonToolbar, IonHeader, IonSearchbar, IonRefresher, IonRefresherContent, RefresherCustomEvent} from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

import { addIcons } from 'ionicons';
import {IonIcon} from '@ionic/angular/standalone';
import { cartOutline, addCircleOutline } from 'ionicons/icons';

import { NgFor } from '@angular/common';

import { VehiculoService, Vehiculo } from '../services/vehiculo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
             IonTitle, IonMenuButton, IonButton, IonButtons, IonToolbar, IonHeader, IonSearchbar, RouterLink, NgFor, IonIcon, IonRefresher, IonRefresherContent, ],
})
export class HomePage {

    handleRefresh(event: any) {

      this.cargarVehiculos();

      setTimeout(() => {
        event.target.complete();
      }, 1000);

    }
  
  vehiculos: Vehiculo[] = [];
  results: Vehiculo[] = [];

    constructor(private vehiculoService: VehiculoService, private route: ActivatedRoute) {
      addIcons({ cartOutline, addCircleOutline });
    }

    ngOnInit() {
      this.route.queryParams.subscribe(() => {
        this.cargarVehiculos();
      });
    }

    cargarVehiculos() {
      this.vehiculoService.obtenerVehiculos().subscribe({
        next: (data) => {
          console.log('Vehículos Android:', data);
          this.vehiculos = data;
          this.results = data;
        },
        error: (error) => {
          console.error('Error Android:', error);
        }
      });
    }

    handleInput(event: Event) {
      const target = event.target as HTMLIonSearchbarElement;
      const query = target.value?.toLowerCase() || '';

      this.results = this.vehiculos.filter((v) =>
        v.patente.toLowerCase().includes(query)
      );
    }
}

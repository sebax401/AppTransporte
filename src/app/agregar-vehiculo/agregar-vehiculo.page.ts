import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
  IonLabel, IonInput, IonButton, IonButtons, IonBackButton
} from '@ionic/angular/standalone';

import { VehiculoService, Vehiculo } from '../services/vehiculo';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.page.html',
  styleUrls: ['./agregar-vehiculo.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
    IonLabel, IonInput, IonButton, IonButtons, IonBackButton
  ]
})
export class AgregarVehiculoPage {

  vehiculo: Vehiculo = {
    idVehiculo: null as any,
    patente: '',
    marca: '',
    modelo: '',
    anio: 2026,
    kilometrajeActual: 0,
    proximoKilometraje: 0,
    fechaRevisionTecnica: '',
    fechaUltimaMantencion: '',
    fechaProximaMantencion: '',
    estadoDpf: '',
    estadoRevision: '',
    estadoExtintor: '',
    observacion: '',
    idConductor: 0,
    estado: true
  };

  constructor(
    private vehiculoService: VehiculoService,
    private router: Router
  ) {}

  guardarVehiculo() {
    const vehiculoEnviar = {
      ...this.vehiculo,
      idVehiculo: 0,
      anio: Number(this.vehiculo.anio),
      kilometrajeActual: Number(this.vehiculo.kilometrajeActual),
      proximoKilometraje: Number(this.vehiculo.proximoKilometraje),
      fechaRevisionTecnica: null,
      fechaUltimaMantencion: null,
      fechaProximaMantencion: null,
      idConductor: null,
      estado: true
    };

    console.log('Enviando vehículo:', vehiculoEnviar);

    this.vehiculoService.agregarVehiculo(vehiculoEnviar).subscribe({
      next: () => {
        alert('Vehículo agregado correctamente');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error completo:', error);
        console.error('Detalle:', error.error);
        alert(JSON.stringify(error.error));
      }
    });
  }
}
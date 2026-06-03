import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehiculo {
  idVehiculo: number;
  patente: string;
  marca: string;
  modelo: string;
  anio: number;
  kilometrajeActual: number;
  proximoKilometraje: number;
  fechaRevisionTecnica: string;
  fechaUltimaMantencion: string;
  fechaProximaMantencion: string;
  estadoDpf: string;
  estadoRevision: string;
  estadoExtintor: string;
  observacion: string;
  idConductor: number;
  estado: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = 'https://localhost:7218/api/Vehiculos';

  constructor(private http: HttpClient) {}

  obtenerVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }
}
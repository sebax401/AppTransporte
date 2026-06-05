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

  fechaRevisionTecnica: string | null;
  fechaUltimaMantencion: string | null;
  fechaProximaMantencion: string | null;

  estadoDpf: string;
  estadoRevision: string;
  estadoExtintor: string;
  observacion: string;

  idConductor: number | null;

  estado: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = 'https://localhost:7218/api/Vehiculos';

  constructor(private http: HttpClient) {}

  agregarVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.apiUrl, vehiculo);
  }

  obtenerVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }
  obtenerVehiculo(id: number): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${this.apiUrl}/${id}`);
  }

  modificarVehiculo(id: number, vehiculo: Vehiculo): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, vehiculo);
  }

  eliminarVehiculo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
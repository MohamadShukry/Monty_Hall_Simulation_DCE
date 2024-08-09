import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  
  private apiUrl = 'https://localhost:7056/api/Simulation/run'; 

  constructor(private http: HttpClient) { }

  runSimulation(numberOfSimulations: number, switchDoor: boolean): Observable<any> {
    return this.http.post<any>(this.apiUrl, { numberOfSimulations, switchDoor });
  }


  
}

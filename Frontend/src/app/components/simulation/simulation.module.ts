import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { SimulationComponent } from './simulation.component'; 
import { SimulationRoutingModule } from './simulation-routing.module'; 
import { SimulationChartModule } from '../simulation-chart/simulation-chart.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SimulationComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    SimulationRoutingModule,
    SimulationChartModule, 
    HttpClientModule
  ],
  
})
export class SimulationModule { }

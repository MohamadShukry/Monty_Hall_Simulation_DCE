import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulationChartComponent } from './simulation-chart.component'; 

@NgModule({
  declarations: [
    SimulationChartComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimulationChartComponent 
  ]
})
export class SimulationChartModule { }

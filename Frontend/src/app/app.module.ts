import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importing feature modules
import { HomeModule } from './components/home/home.module';
import { SimulationModule } from './components/simulation/simulation.module';
import { GameModule } from './components/game/game.module';
import { MessageModule } from './components/message/message.module';
import { SimulationChartModule } from './components/simulation-chart/simulation-chart.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule,
    SimulationModule,
    GameModule,
    MessageModule,
    SimulationChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

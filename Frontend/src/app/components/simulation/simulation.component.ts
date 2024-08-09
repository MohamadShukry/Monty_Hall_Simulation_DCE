
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SimulationService } from 'src/app/service/simulation.service';



@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent {
  simulationForm: FormGroup;
  result: any;
  Totalgames: any;
  wins :any;
  losses:any;
  errorMessage: string | undefined;

 

  constructor(private fb: FormBuilder, private simulationService: SimulationService, private router: Router) {
    this.simulationForm = this.fb.group({
      numberOfSimulations: [1000,[Validators.required, Validators.min(1)]],
      switchDoor: [false]
    });
  }


  onSubmit() {
    if (this.simulationForm.valid) {
      const { numberOfSimulations, switchDoor } = this.simulationForm.value;
      this.simulationService.runSimulation(numberOfSimulations, switchDoor).pipe(
        catchError(error => {
         
          console.error('Error occurred:', error);
          
          this.errorMessage = 'An error occurred while running the simulation. Please try again.';
          
          return of(null);
        })
      ).subscribe(data => {
        if (data) {
          this.result = data;
          this.Totalgames = data.totalGames;
          this.wins = data.wins;
          this.losses = data.losses;  
          console.log(this.result);
        }
      });
    }
  }
  
  

  navigateToHome(){
    this.router.navigate(['/home']);
  }

  navigateToGame() {
    this.router.navigate(['/game']);
  }
}


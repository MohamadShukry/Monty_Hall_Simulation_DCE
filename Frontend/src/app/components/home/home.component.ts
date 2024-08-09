import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('backgroundMusic') backgroundMusic!: ElementRef<HTMLAudioElement>;

  musicPlaying = true;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    const audio = this.backgroundMusic.nativeElement;
    audio.volume = 0.09; 
  }

  navigateToSimulation() {
    this.router.navigate(['/simulation']);
  }

  navigateToGame() {
    this.router.navigate(['/game']);
  }
}

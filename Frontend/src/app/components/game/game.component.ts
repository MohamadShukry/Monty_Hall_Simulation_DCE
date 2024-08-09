import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  title = 'MontyHallParadox-Simulation';

  imagePath: Array<string> = ["../assets/Door.jpg", "../assets/Door.jpg", "../assets/Door.jpg"];
  userDoorChoice = 0;
  revealedGoatDoor = 0;
  carDoor = this.generateRandom();
  gameCompleted = false;

  showModal = false;
  modalMessage = '';

  constructor(private router: Router) { }

  generateRandom(min = 1, max = 4) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

  playAudio(audioPath: string) {
    let audio = new Audio();
    audio.src = audioPath;
    audio.load();
    audio.play();
  }

  chooseDoor(number: number) {
    if (this.gameCompleted) {
      this.showModalMessage("The game is already completed. Do you want to play again?");
      return;
    }

    if (this.userDoorChoice === 0) {
      this.userDoorChoice = number;
      this.imagePath[this.userDoorChoice - 1] = "../assets/ChosenDoor.png";

      // Determine the revealed goat door
      if (this.userDoorChoice === 1) {
        this.revealedGoatDoor = this.carDoor === 2 ? 3 : (this.carDoor === 3 ? 2 : (Math.random() <= 0.5 ? 2 : 3));
      } else if (this.userDoorChoice === 2) {
        this.revealedGoatDoor = this.carDoor === 1 ? 3 : (this.carDoor === 3 ? 1 : (Math.random() <= 0.5 ? 1 : 3));
      } else if (this.userDoorChoice === 3) {
        this.revealedGoatDoor = this.carDoor === 1 ? 2 : (this.carDoor === 2 ? 1 : (Math.random() <= 0.5 ? 1 : 2));
      }

     
      setTimeout(() => {
        this.showGoat(this.revealedGoatDoor);
        this.showModalMessage("You can keep your choice or change it.");
      }, 1000); // 1 second delay
    } else {
      
      this.showModalMessage("You have already chosen a door.");
    }
  }

  changeChoice() {
    if (this.userDoorChoice === 0) {
      this.showModalMessage("Choose a door first!");
    } else if (!this.gameCompleted) {
      if (this.userDoorChoice === 1) {
        this.imagePath[this.userDoorChoice - 1] = "../assets/Door.jpg";
        this.userDoorChoice = this.revealedGoatDoor === 2 ? 3 : 2;
      } else if (this.userDoorChoice === 2) {
        this.imagePath[this.userDoorChoice - 1] = "../assets/Door.jpg";
        this.userDoorChoice = this.revealedGoatDoor === 1 ? 3 : 1;
      } else if (this.userDoorChoice === 3) {
        this.imagePath[this.userDoorChoice - 1] = "../assets/Door.jpg";
        this.userDoorChoice = this.revealedGoatDoor === 1 ? 2 : 1;
      }
      this.show(); 
    }
  }

  keepChoice() {
    if (this.userDoorChoice === 0) {
      this.showModalMessage("Choose a door first!");
    } else if (!this.gameCompleted) {
      this.show(); 
    }
  }

  showGoat(goatDoorNumberToReveal: number) {
    this.imagePath[goatDoorNumberToReveal - 1] = "../assets/Goat.png";
  }

  show() {
    if (this.userDoorChoice === this.carDoor) {
      this.imagePath[this.userDoorChoice - 1] = "../assets/ChosenSportsCar.png";
      this.playAudio("../assets/CarSound.mp3");
      this.modalMessage = "Congratulations! You have won the car!";
    } else {
      this.imagePath[this.userDoorChoice - 1] = "../assets/ChosenGoat.png";
      this.playAudio("../assets/GoatSound.mp3");
      this.modalMessage = "Sorry, you chose a goat. Try again!";
    }
    this.gameCompleted = true;

   
    setTimeout(() => {
      this.showModalMessage(this.modalMessage + " Do you want to play again?");
    }, 1000); // 1 second delay
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToSimulation() {
    this.router.navigate(['/simulation']);
  }

  showModalMessage(message: string) {
    this.modalMessage = message;
    this.showModal = true;
    // Automatically close the modal after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      this.handleModalClose();
    }, 5000);
  }

  handleModalClose() {
    this.showModal = false;
    if (this.gameCompleted) {
     
      if (confirm("Do you want to play again?")) {
        this.resetGame();
      }
    }
  }

  resetGame() {
    this.userDoorChoice = 0;
    this.revealedGoatDoor = 0;
    this.carDoor = this.generateRandom();
    this.gameCompleted = false;
    this.imagePath = ["../assets/Door.jpg", "../assets/Door.jpg", "../assets/Door.jpg"];
  }
}

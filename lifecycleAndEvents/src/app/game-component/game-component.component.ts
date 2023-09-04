import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css'],
})
export class GameComponentComponent {
  numSeconds: number = 0;
  intervalReference = undefined;

  //ODD
  //creating event emitter
  @Output() createOddEvent = new EventEmitter<number>();
  //function that triggers the event emitter to emit an event
  addOddComponent(value: number) {
    this.createOddEvent.emit(this.numSeconds);
  }
  //EVEN
  //creating event emitter
  @Output() createEvenEvent = new EventEmitter<number>();
  //function that triggers the event emitter to emit an event
  addEvenComponent(value: number) {
    this.createEvenEvent.emit(this.numSeconds);
  }
  onStartGame() {
    this.intervalReference = setInterval(() => {
      this.numSeconds++;
      if (this.numSeconds % 2 == 0) {
        this.addEvenComponent(this.numSeconds);
      } else {
        this.addOddComponent(this.numSeconds);
      }
    }, 500);
  } //ends onStartGame

  onStopGame() {
    clearInterval(this.intervalReference);
  } //ends onStopGame
} //ends GameComponentComponent

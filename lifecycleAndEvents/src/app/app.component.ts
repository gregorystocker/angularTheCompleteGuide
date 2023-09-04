import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lifecycleAndEvents';
  evenComponentsArray: number[] = [];
  oddComponentsArray: number[] = [];

  onCreateOddEvent(value: number) {
    console.log(`catching odd event #${value}`);
    this.evenComponentsArray.push(value);
  } //ends onCreateEvent

  onCreateEvenEvent(value: number) {
    console.log(`catching even event #${value}`);
    this.oddComponentsArray.push(value);
  }
}

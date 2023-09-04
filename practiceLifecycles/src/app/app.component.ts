import { Component } from '@angular/core';
import { CounterComponent } from './shared/counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practiveDirectives';
  buttonClicksArray = [];
  isHidden = false;
  index = 0;

  /**
   * Gets the current timestamp and
   * adds the string to the buttonClicksArray
   */
  onDisplayClick() {
    CounterComponent.counter++;
    //hide and unhide the paragraph element
    this.isHidden = !this.isHidden;
    //add the new date to the array
    const date = new Date().toLocaleTimeString();
    let newObj = null;
    if (this.index >= 4) {
      newObj = {
        date: date,
        backgroundColor: 'blue',
        index: this.index,
      };
    } else {
      newObj = {
        date: date,
        backgroundColor: 'white',
        index: this.index,
      };
    }

    this.index++;
    this.buttonClicksArray.push(newObj);
    console.log('hello');
    console.log(this.buttonClicksArray.join(', '));
  }
} //ends AppComponent class

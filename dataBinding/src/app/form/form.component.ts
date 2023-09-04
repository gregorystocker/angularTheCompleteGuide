import { Component } from '@angular/core';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
})
export class FormComponent {
  username: string = 'default username';
  clearUsername() {
    this.username = '';
  }
  isEmpty() {
    if (this.username === '') {
      return true;
    } else {
      return false;
    }
  }
}

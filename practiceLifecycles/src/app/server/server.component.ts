import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  Input,
  AfterContentInit,
  DoCheck,
} from '@angular/core';
import { CounterComponent } from '../shared/counter/counter.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit
{
  @Input() counter: number = 0;
  serverName: string = 'default server name';

  constructor() {
    console.log('constructor called!');
    this.counter = CounterComponent.counter;
  }
  ngOnInit() {
    console.log('ngOnInit called in server');
  }

  //this doesn't seem to be working
  ngOnChanges(changes: SimpleChanges): void {
    console.log('logging changes');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('This runs on every change detection cycle');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!!!');
  }

  handleButtonClick() {
    this.counter++;
    this.serverName = `server: ${this.counter} `;
  }
}

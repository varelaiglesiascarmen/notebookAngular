import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  counter = 10;
  counterSignal = signal(10);

  variation(value : number){
    this.counter += value;
    this.counterSignal.update( current => current + value);
  }

  resetCounter (){
    this.counter = 10;
    this.counterSignal.set(0);
  }
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    
<hr>
<h1>Counter Component</h1>

<h3>Counter: {{ counter }}</h3>
<button (click)="changeValue(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="changeValue(-1)">-1</button>

    `
})

export class CounterComponent {
    public counter:number = 10 ;

    
 resetCounter():void{
    this.counter = 10;
   }
  
   changeValue(value:number){
    this.counter += value;
   }
}


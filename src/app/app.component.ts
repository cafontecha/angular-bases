import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title:string = 'Mi primera app de Angular';
 public counter:number = 10 ;

 increaseBy():void {
  this.counter += 1;
 }

 decreaseBy():void{
  this.counter -=1;
 }

 resetCounter():void{
  this.counter = 10;
 }

 changeValue(value:number){
  this.counter += value;
 }
}

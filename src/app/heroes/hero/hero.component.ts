import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 45;

  
  public get capitalizedName() : string {
    return this.name.toUpperCase();
  }
  
  getHeroDescription(): string{
    return`${this.name} - ${this.age}`
  }
  
  changeHero():void{
    this.name = 'SpiderMan';
  }

  chengeAge():void{
    this.age = 28;
  }

  reset(){
    this.name = 'Iron Man';
    this.age = 45;
  }

}

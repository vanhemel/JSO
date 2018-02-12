import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'heroesTom',
  templateUrl: './heroes-tom.component.html',
  styleUrls: ['./heroes-tom.component.css']
})
export class HeroesTomComponent implements OnInit {
   title: string = "Hero";
  
  myhero: Hero = new Hero(1, "Mega Mindy", false);

  constructor() { }
  ngOnInit() {
  }
}

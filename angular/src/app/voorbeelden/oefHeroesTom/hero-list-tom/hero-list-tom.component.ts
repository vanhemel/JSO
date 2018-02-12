import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../heroes-tom/Hero';

@Component({
  selector: 'app-hero-list-tom',
  templateUrl: './hero-list-tom.component.html',
  styleUrls: ['./hero-list-tom.component.css']
})
export class HeroListTomComponent implements OnInit {
  heroes: Hero[] = HEROES;
  beschikb:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  
}

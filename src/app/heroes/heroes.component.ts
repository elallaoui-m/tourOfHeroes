import { Component, OnInit } from "@angular/core";
import { Hero } from "../models/hero";
import { HEROES } from '../models/mock-heroes';



@Component({
    selector:'heroes-app',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements  OnInit{

    hero: Hero = {
        id: 1,
        name:  'Windstorm'
    }

    selectedHero: Hero ;

    onSelect = (selectedHero: Hero) =>{
        this.selectedHero = selectedHero
    }

    heroes = HEROES;
    ngOnInit(): void {
        
    }



}
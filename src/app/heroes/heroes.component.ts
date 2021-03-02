import { Component, OnInit } from "@angular/core";
import { Hero } from '../models/Hero'



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
    ngOnInit(): void {
        
    }



}
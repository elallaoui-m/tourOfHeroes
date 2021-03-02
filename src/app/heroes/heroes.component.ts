import { Component, OnInit } from "@angular/core";



@Component({
    selector:'heroes-app',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements  OnInit{

    hero = 'Windstorm';
    ngOnInit(): void {
        
    }



}
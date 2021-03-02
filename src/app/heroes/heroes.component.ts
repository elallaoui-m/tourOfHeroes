import { Component, Inject, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
import { Hero } from "../models/hero";
import { HEROES } from '../models/mock-heroes';



@Component({
    selector:'heroes-app',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements  OnInit{


    selectedHero: Hero ;
    heroes: Hero[]=[];
    
   constructor(private heroService: HeroService, private messageService: MessageService){
   }

       
   ngOnInit (): void {
        this.getHeroes();
    }

   getHeroes = (): void  => {
         this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
        //this.heroes  = HEROES;
    }



    onSelect = (selectedHero: Hero) =>{
        this.selectedHero = selectedHero;
        this.messageService.add(`HeroesComponent: Selected hero id=${selectedHero.id}`);
    }





}
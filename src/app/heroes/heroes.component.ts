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

    add = (heroname: string)=>{
        heroname = heroname.trim();
        if (!heroname) { return; }
        this.heroService.addHero({ name: heroname } as Hero).subscribe(heroes => this.heroes = heroes);
    }

    delete = (hero: Hero)=>{
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }



    





}
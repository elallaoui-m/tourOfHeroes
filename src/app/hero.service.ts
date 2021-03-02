import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  
import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';
import { MessageService } from './message.service'; 

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }


  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero = (id: Number) =>{
    const hero =of(HEROES.filter(x => x.id === id)[0]);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    //find(hero => hero.id === id)
    return hero;
  }

}
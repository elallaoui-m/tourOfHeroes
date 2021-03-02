import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../models/hero';
import { HeroService } from "../hero.service";


@Component({
    selector: 'hero-details',
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})
export class HeroDetailsComponent implements  OnInit{

    @Input() hero: Hero;


    constructor(

        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ){  

    }

    ngOnInit(): void {
        this.getHero();
    }
      
    getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    goBack = ()=>{
        this.location.back();
    }

      





}
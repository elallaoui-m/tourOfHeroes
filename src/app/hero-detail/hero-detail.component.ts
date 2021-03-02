import { Component, Input, OnInit } from "@angular/core";
import { Hero } from '../models/hero';


@Component({
    selector: 'hero-details',
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})
export class HeroDetailsComponent implements  OnInit{

    @Input() hero: Hero;

    ngOnInit(): void {

    }





}
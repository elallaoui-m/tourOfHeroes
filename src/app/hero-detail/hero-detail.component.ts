import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
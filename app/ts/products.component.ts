import {Component} from '@angular/core';import {Router,ActivatedRoute,Routes} from '@angular/router';import {DrinksComponent} from './drinks.component';@Component({    selector: 'products',    templateUrl:'app/templates/products.component.html',    providers:[DrinksComponent]})export class ProductsComponent {    constructor(private router:Router,                private activatedRoute:ActivatedRoute,                private Drinks: DrinksComponent) {        debugger;    }}//export const routes:Routes = <any>[//    {path: '', redirectTo: ''},//    {path: 'drinks/:id', component: DrinksComponent},//]
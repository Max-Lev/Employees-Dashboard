import {Component} from '@angular/core';@Component({    selector: 'dashboard',    styleUrls: ['app/css/app.component.css'],    templateUrl: '../app/templates/app.component.html'})export class AppComponent {    pageTitle:string = 'Top header title';    actionName:string = "Action";    Person:any = {        name: 'Max'    };    constructor() {        console.log('AppComponent Init');    }}
import {Component,NgModule} from '@angular/core';import {RouterModule,Router, ActivatedRoute } from '@angular/router';//import {namedirective} from './name.directive';@Component({    selector: 'location-component',    styleUrls: ['app/css/location.component.css'],    templateUrl: '../app/templates/location.component.html',   // declarations: [namedirective]})//@NgModule({//    declarations: [namedirective]//})export class LocationComponent {    private pageTitle:string;    protected route;    constructor(protected router:Router) {        this.pageTitle = 'Locations Component';        console.log(this.router);    }    back():void {        this.router.navigate(['/details'], {relativeTo: this.route});    }}
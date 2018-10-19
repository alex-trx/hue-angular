import { Component, OnInit } from '@angular/core';
import { HueHttpServiceService } from '../hue-http-service.service';
import { Light } from '../light';
import { LightList } from '../light-list';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatRadioGroup, MatRadioButton } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  SomeResponse: Object;
  lit: Light;
  lights: LightList[] = [];

  constructor(
    private hueHttpServiceService: HueHttpServiceService
  ) { }

  ngOnInit() {
    console.log("testing");
    // this.SomeResponse = this.hueHttpServiceService.test();
    // this.hueHttpServiceService.test().subscribe(hero => this.SomeResponse = hero);
    this.hueHttpServiceService.getLight().subscribe(lit => this.lit = lit);
    this.hueHttpServiceService.getAllLights().subscribe(lights => this.lights = lights);
  }

  lightOff(lightNumber: string){
    console.log("light off");
    this.hueHttpServiceService.lightOff(lightNumber).subscribe(res => console.log(res));
  }
  
  lightOn(lightNumber: string){
    console.log("light off");
    this.hueHttpServiceService.lightOn(lightNumber).subscribe(res => console.log(res));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Light } from './light';
import { LightList } from './light-list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class HueHttpServiceService {
  private onMessage = {"on": true};
  private offMessage = {"on": false};
  private baseUrl = "http://192.168.0.50/api/tecsRNV6qF0tsKg8EAKi0p3Xx8nCEBNZQ5sGYzNQ/";

  constructor(
    private http: HttpClient
  ) { }

  test(): Observable<any> {
    // return this.http.get<Object>("http://192.168.0.50/api/tecsRNV6qF0tsKg8EAKi0p3Xx8nCEBNZQ5sGYzNQ/lights/3/");
    return this.http.get<any>("http://192.168.0.50/api/tecsRNV6qF0tsKg8EAKi0p3Xx8nCEBNZQ5sGYzNQ/lights/3/").pipe(
    // return this.http.get<any>("http://192.168.0.50").pipe(
    // return this.http.get<any>("http://www.google.com").pipe(
      // map((res: Response) => res.json()),
      tap(r => {
        console.log("tap");
        console.log(r);
      })
      

    );
  }

  getLight(): Observable<Light> {
    return this.http.get<Light>("http://192.168.0.50/api/tecsRNV6qF0tsKg8EAKi0p3Xx8nCEBNZQ5sGYzNQ/lights/3/").pipe(
      tap(r => {
        console.log("tap");
        console.log(r);
      })
      

    );
  }

  getAllLights(): Observable<LightList[]> {
    return this.http.get<LightList[]>("http://192.168.0.50/api/tecsRNV6qF0tsKg8EAKi0p3Xx8nCEBNZQ5sGYzNQ/lights/").pipe(
      tap(r => {
        console.log("get all lights");
        console.log(r);
      })
      

    );
  }

  

  lightOn (lightNumber: string): Observable<any> {
    console.log(this.baseUrl + "lights/" + lightNumber + "/state");
    return this.http.put(this.baseUrl + "lights/" + lightNumber + "/state", this.onMessage, httpOptions).pipe(
      tap(r => {
        console.log("lights");
        console.log(r);
      })
    );
  }
  lightOff (lightNumber: string): Observable<any> {
    console.log(this.baseUrl + "lights/" + lightNumber + "/state");
    return this.http.put(this.baseUrl + "lights/" + lightNumber + "/state", this.offMessage, httpOptions).pipe(
      tap(r => {
        console.log("lights off");
        console.log(r);
      })
    );
  }
}

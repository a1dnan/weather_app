import { WeatherData } from './../models/weather.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.apiUrl, {
      params: new HttpParams()
      .set('q', city)
      .set('appid','268fec76d80429be5a686a8aae239599')
      .set('units','metric')

    })
  }
}

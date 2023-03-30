import { WeatherData } from './../models/weather.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  headers = {
    weatherUrl: 'https://openweather43.p.rapidapi.com/weather',
    XRapidAPIKeyName : 'X-RapidAPI-Key',
    XRapidAPIKeyValue : 'ce9f912023msha4aa1af26f87736p184500jsn41a0e855f08f',
    XRapidAPIHostName : 'X-RapidAPI-Host',
    XRapidAPIHostValue : 'openweather43.p.rapidapi.com'
  };

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.headers.weatherUrl, {
      headers: new HttpHeaders()
      .set(this.headers.XRapidAPIHostName, this.headers.XRapidAPIHostValue)
      .set(this.headers.XRapidAPIKeyName, this.headers.XRapidAPIKeyValue),
      params: new HttpParams()
      .set('q', city)
      .set('appid','da0f9c8d90bde7e619c3ec47766a42f4')
      .set('units','metric')

    })
  }
}

import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  city: string = 'Rabat';
  weatherData!: WeatherData;


  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city='';
  }

  search(){
    this.getWeatherData(this.city);
    this.city='';
  }

  private getWeatherData(city: string){
    this.weatherService.getWeatherData(city).subscribe({
      next: (data) =>{
        this.weatherData = data;
      }
      
    })
  }
}

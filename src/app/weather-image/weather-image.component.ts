import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.css']
})
export class WeatherImageComponent implements OnInit {

  constructor() { }

  @Input()
  icon: string;

  @Input()
  alttext: string;

  ngOnInit() {
  }

}

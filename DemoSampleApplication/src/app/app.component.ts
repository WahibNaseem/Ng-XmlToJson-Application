import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { HttpClient } from '@angular/common/http';
import { xml } from './_mockData/mock-food';
import { RootObject } from './_models/rootObject';
import { Food } from './_models/food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Xml To Json Application';
  food: Food;
  foods: RootObject;
  xmlFood = xml;

  constructor(
    private xml2jsonService: NgxXml2jsonService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    const parser = new DOMParser();
    const foodXml = parser.parseFromString(this.xmlFood, 'application/xhtml+xml');
    this.foods = this.xml2jsonService.xmlToJson(foodXml);

  }
}

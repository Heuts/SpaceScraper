import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private nasaApiKey: string = 'brw6sgkbz8BBd4LI6PAFYyVOeaIMBCh2Gn9WeZYv';
  imageUrls: string[] = [];
  private baseUrl;
  private date: Date;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  ngOnInit() {
    this.baseUrl = 'https://api.nasa.gov/planetary/apod';
    this.date = new Date();
    console.log(this.date);
    this.fetchImages();
  }
  fetchImages() {
    // TODO: refactor with loop?
    const paramsFirstImage = new HttpParams().set('api_key', this.nasaApiKey);
    this.http.get(`${this.baseUrl}`,
      { params: paramsFirstImage })
      .subscribe(i => {
        this.imageUrls.push(i['hdurl']);
      });

    this.date.setDate(this.date.getDate() - 1);
    let dateParam = this.datePipe.transform(this.date, "yyyy-MM-dd");

    const paramsSecondImage = new HttpParams()
      .set('api_key', this.nasaApiKey)
      .set('date', dateParam);

    this.http.get(`${this.baseUrl}`,
      { params: paramsSecondImage })
      .subscribe(i => {
        this.imageUrls.push(i['hdurl']);
      });

    this.date.setDate(this.date.getDate() - 1);
    dateParam = this.datePipe.transform(this.date, "yyyy-MM-dd");

    const paramsThirdImage = new HttpParams()
      .set('api_key', this.nasaApiKey)
      .set('date', dateParam);

      this.http.get(`${this.baseUrl}`,
      { params: paramsThirdImage })
      .subscribe(i => {
        this.imageUrls.push(i['hdurl']);
      });

  }

}

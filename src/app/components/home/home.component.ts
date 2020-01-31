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
  private baseUrl = 'https://api.nasa.gov/planetary/apod';
  private date: Date = new Date();
  private amountOfImages = 3;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  ngOnInit() {
    this.fetchImages(this.amountOfImages);
  }

  fetchImages(amountOfImages: number) {
    for (let index = 0; index < amountOfImages; index++) {
      this.date.setDate(this.date.getDate() - index);
      const dateParam: string = this.datePipe.transform(this.date, "yyyy-MM-dd");

      const params = new HttpParams()
        .set('api_key', this.nasaApiKey)
        .set('date', dateParam)
        .set('hd', 'false');

      this.http.get(`${this.baseUrl}`,
        { params: params })
        .subscribe(i => {
          this.imageUrls.push(i['hdurl']);
        });
    }
  }
}

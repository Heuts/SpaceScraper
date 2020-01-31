import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NasaImage } from 'src/app/models/nasa-image.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nasa-carousel',
  templateUrl: './nasa-carousel.component.html',
  styleUrls: ['./nasa-carousel.component.scss']
})
export class NasaCarousel implements OnInit {
  private nasaApiKey: string = 'brw6sgkbz8BBd4LI6PAFYyVOeaIMBCh2Gn9WeZYv';
  private baseUrl = 'https://api.nasa.gov/planetary/apod';
  private date: Date = new Date();
  private amountOfImages = 20;
  private disallowedUrl = 'https://www.youtube.com';
  nasaImages: NasaImage[] = [];

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
        .set('date', dateParam);

      this.http.get(`${this.baseUrl}`,
        { params: params }).pipe(
        filter(i => !(i['url'].substring(0, this.disallowedUrl.length) === this.disallowedUrl)))
        .subscribe(i => {
            const nasaImage: NasaImage = {
              copyright: i['copyright'],
              date: i['date'],
              explanation: i['explanation'],
              hdurl: i['hdurl'],
              title: i['title'],
              url: i['url'],
            };
            this.nasaImages.push(nasaImage);
          }
        );
    }
  }
}

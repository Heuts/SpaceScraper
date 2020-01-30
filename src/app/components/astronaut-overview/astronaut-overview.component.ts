import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-astronaut-overview',
  templateUrl: './astronaut-overview.component.html',
  styleUrls: ['./astronaut-overview.component.scss']
})
export class AstronautOverviewComponent implements OnInit {
  amountOfPeopleInSpace: number;
  astronauts: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchAstronauts();
    console.log(this.astronauts);
  }

  fetchAstronauts() {
    return this.http.get("http://api.open-notify.org/astros.json").subscribe(a => {
      this.amountOfPeopleInSpace = a['number'];
      a['people'].map(astronaut => {
        this.astronauts.push(astronaut);
      });
    });
  }
}

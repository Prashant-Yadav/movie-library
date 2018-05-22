import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "./shared/services/http-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public http: HttpClientService
  ) {}

  ngOnInit() {
    this.http.getRouter().navigate(['search']);
  }

}

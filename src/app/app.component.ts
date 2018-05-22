import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "./shared/services/http-client.service";
import {APP_ROUTES} from "./shared/constants/app-routes";

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
    this.http.getRouter().navigate([APP_ROUTES.search]);
  }

}

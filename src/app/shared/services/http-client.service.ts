import {Injectable, Injector} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class HttpClientService {

  router: Router;
  apiKey: string = 'fa8eea56';

  constructor(
    public http: HttpClient,
    public injector: Injector

  ) { }

  getRouter() {
    if (!this.router) {
      this.router = this.injector.get(Router);
    }
    return this.router;
  }

  get(url: string, params: any = null) {
    var params = params;

    params['apiKey'] = this.apiKey;

    return this.http.get(url, {params});
  }

  extractData(res) {

    return res.json();

  }

  handleError(error) {
    return error;
  }
}

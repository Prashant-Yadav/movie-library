import { Injectable } from '@angular/core';
import {HttpClientService} from "../../../shared/services/http-client.service";

@Injectable()
export class SearchService {

  constructor(
    public http: HttpClientService
  ) { }

  search(params: any = null) {
    return this.http.get('http://www.omdbapi.com/', params);
  }
}

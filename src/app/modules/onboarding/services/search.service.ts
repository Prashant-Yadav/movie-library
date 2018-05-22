import { Injectable } from '@angular/core';
import {HttpClientService} from "../../../shared/services/http-client.service";
import {ApiPaths} from "../../../shared/constants/api-paths";

@Injectable()
export class SearchService {

  constructor(
    public http: HttpClientService
  ) { }

  search(params: any = null) {
    return this.http.get(ApiPaths.omdbSearchApi, params);
  }
}

import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import {HttpClientService} from "../../../shared/services/http-client.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientService, SearchService]
    });
  });

  it('should be created', inject([HttpClientService, SearchService],
    (http: HttpClientService, service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});

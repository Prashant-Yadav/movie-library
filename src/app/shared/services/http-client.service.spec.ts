import {TestBed, inject, async} from '@angular/core/testing';

import { HttpClientService } from './http-client.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('HttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpTestingController, HttpClientService]
    });
  });

  it('should be created', async(inject([HttpTestingController, HttpClientService],
    (httpClient: HttpTestingController, service: HttpClientService) => {
    expect(service).toBeTruthy();
  })));
});

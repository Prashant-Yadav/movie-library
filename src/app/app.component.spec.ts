import {TestBed, async, inject} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientService} from "./shared/services/http-client.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
describe('AppComponent', () => {
  let http: HttpClientService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        HttpClientService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(inject([HttpClientService],
    (http: HttpClientService) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })));
});

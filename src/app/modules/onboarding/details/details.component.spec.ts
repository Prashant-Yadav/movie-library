import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import {Rating} from "../../../shared/models/movie";

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.movie = {
      Title: "Inception",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      Awards: "Won 4 Oscars. Another 152 wins & 204 nominations.",
      Country: "USA, UK",
      Director: "Christopher Nolan",
      Poster: "https://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Ratings: [
        {Source: "Internet Movie Database", Value: "8.8/10"},
        {Source: "Rotten Tomatoes", Value: "86%"},
        {Source: "Metacritic", Value: "74/100"}
      ],
      Released: "16 Jul 2010",
      Year: "2010",
      imdbId: "tt1375666",
      imbdRating: "8.8",
      Website: "http://inceptionmovie.warnerbros.com/"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

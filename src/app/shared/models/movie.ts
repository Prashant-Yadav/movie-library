export class Rating {
  Source: string;
  Value: string;
}

export class Movie {
  Title: string;
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Poster: string;
  Ratings: Rating[];
  Released: string;
  Year: string;
  imdbId: string;
  imbdRating: string;
  Website: string;
}

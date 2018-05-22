import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../shared/models/movie";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}

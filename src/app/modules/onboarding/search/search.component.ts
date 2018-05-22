import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../services/search.service";
import {Movie} from "../../../shared/models/movie";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchForm: FormGroup;

  public searchedMovie: Movie = null;

  constructor(
    private _fb: FormBuilder,
    private searchService: SearchService
  ) { }

  ngOnInit() {

    this.searchForm = this.createSearchForm();

  }

  createSearchForm() {
    return this._fb.group({
      title: ['', [<any>Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.searchForm.controls.title.value);

    let params = {
      t : this.searchForm.controls.title.value
    };

    this.searchService.search(params).subscribe(
      (response: Movie) => this.searchedMovie = response,
      (error) => console.log(error)
    );
  }

}

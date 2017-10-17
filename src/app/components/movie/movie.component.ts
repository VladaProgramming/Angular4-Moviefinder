import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
    movie: Object;

  constructor(private router: ActivatedRoute, private _movieService: MovieService) {

  }

  ngOnInit(){
      this.router.params.subscribe((params) => {
          let id = params['id'];
          this._movieService.getMovie(id).subscribe(movie => {
              this.movie = movie;
          })
      })
  }
}
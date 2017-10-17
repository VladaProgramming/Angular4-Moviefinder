import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
    apiKey: String;

    constructor(private _jsonp: Jsonp) {
        this.apiKey = 'b53da9afa9ba57d54ba66ca85b77236d';
        console.log('MovieService Initialized...');
    }

    getPopular() {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=b53da9afa9ba57d54ba66ca85b77236d')
            .map(res => res.json());
    }

    getInTheaters() {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-09-01&primary_release_date.lte=2017.10.10&sort_by=popularity.desc&api_key=b53da9afa9ba57d54ba66ca85b77236d')
            .map(res => res.json());
    }

    searchMovies(searchStr: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apiKey)
        .map(res => res.json());
    }

    getMovie(id: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apiKey)
        .map(res => res.json());
    }
}
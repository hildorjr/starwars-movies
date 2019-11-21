import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: any[] = [];
  search: string = '';

  constructor(private filmsService: FilmsService) { }

  get filteredFilms() {
    return this.films.filter((film) => {
      const
        search = this.search.toLocaleLowerCase(),
        title = film.title.toLocaleLowerCase();
      return title.includes(search) || film.episode_id == search;
    }).sort((a,b) => (a.episode_id > b.episode_id) ? 1 : ((b.episode_id > a.episode_id) ? -1 : 0));
  }

  getFilms() {
    this.filmsService.getFilms()
      .subscribe((data: any) => this.films = data.results);
  }

  ngOnInit() {
    this.getFilms();
  }

}

import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  film: any;

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute) { }

  getFilm(id: number) {
    this.filmsService.getFilm(id)
      .subscribe((data: any) => this.film = data);
  }

  ngOnInit() {
    this.getFilm(parseInt(this.route.snapshot.paramMap.get('id')));
  }

}

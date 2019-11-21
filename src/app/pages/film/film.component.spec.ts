import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmsService } from 'src/app/services/films.service';

describe('FilmComponent', () => {
  let 
    component: FilmComponent,
    fixture: ComponentFixture<FilmComponent>,
    dummyFilm = {
      title: 'Teste 333',
      episode_id: 1,
      opening_crawl: 'Lorem ipsum',
      url: '/1/',
      director: 'Hildor',
      producer: 'Marcus',
      release_date: '11-11-1999',
      characters: [1, 2],
      planets: [1, 2],
      starships: [1, 2],
      vehicles: [1, 2],
      species: [1, 2]
    };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ FilmComponent ],
      providers: [ FilmsService ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display title as 'Teste 333'`, () => {
    component.film = dummyFilm;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Teste 333');
  });

  it(`should display '2 characters'`, () => {
    component.film = dummyFilm;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('2 characters');
  });

  it(`should display 'Directed by Hildor'`, () => {
    component.film = dummyFilm;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Directed by Hildor');
  });
  
});

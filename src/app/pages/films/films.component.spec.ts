import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsComponent } from './films.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmsService } from 'src/app/services/films.service';

describe('FilmsComponent', () => {
  let
    component: FilmsComponent,
    fixture: ComponentFixture<FilmsComponent>,
    dummyFilms = [
      {
        title: 'Teste 333',
        episode_id: 1,
        opening_crawl: 'Lorem ipsum',
        url: '/1/'
      },
      {
        title: 'Teste 777',
        episode_id: 2,
        opening_crawl: 'Lorem ipsum',
        url: '/2/'
      }
    ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [ FilmsComponent ],
      providers: [ FilmsService ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render title as 'Star Wars Films'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Star Wars Films');
  });

  it(`should render search input`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input')).toBeDefined();
  });

  it(`should render with films`, () => {
    component.films = dummyFilms;
    expect(component.filteredFilms.length).toEqual(2);
  });

  it(`should filter films by title`, () => {
    component.films = dummyFilms;
    component.search = '333';
    expect(component.filteredFilms[0]).toEqual(dummyFilms[0]);
  });

  it(`should filter films by episode id`, () => {
    component.films = dummyFilms;
    component.search = '2';
    expect(component.filteredFilms[0]).toEqual(dummyFilms[1]);
  });
});

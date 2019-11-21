import { TestBed } from '@angular/core/testing';

import { FilmsService } from './films.service';
import { HttpClientModule } from '@angular/common/http';

describe('FilmsService', () => {
  let service: FilmsService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    }).compileComponents()
    service = TestBed.get(FilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getFilms should return results',
    (done: DoneFn) => {
    service.getFilms().subscribe((data: any) => {
      expect(data.results).toBeDefined();
      done();
    });
  });

  it('#getFilms should return more than 0 results',
    (done: DoneFn) => {
    service.getFilms().subscribe((data: any) => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  it('#getFilm should return a defined title',
    (done: DoneFn) => {
    service.getFilm(1).subscribe((data: any) => {
      expect(data.title).toBeDefined();
      done();
    });
  });

});

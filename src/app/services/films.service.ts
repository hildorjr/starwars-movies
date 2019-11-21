import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  
  apiUrl = `${environment.url}films/`;
  apiUrlQuery = '?format=json';
  
  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get(`${this.apiUrl}${this.apiUrlQuery}`);
  }

  getFilm(id: number) {
    return this.http.get(`${this.apiUrl}${id}${this.apiUrlQuery}`);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchCountryByAlphaCode(code: string) {
    return this.http.get<Country[]>(`${this._apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string) {
    return this.http
      .get<Country[]>(`${this._apiUrl}/capital/${term}`)
      .pipe(catchError(() => of([])));
  }

  searchCountry(term: string) {
    return this.http
      .get<Country[]>(`${this._apiUrl}/name/${term}`)
      .pipe(catchError(() => of([])));
  }

  searchRegion(region: string) {
    return this.http
      .get<Country[]>(`${this._apiUrl}/region/${region}`)
      .pipe(catchError(() => of([])));
  }
}

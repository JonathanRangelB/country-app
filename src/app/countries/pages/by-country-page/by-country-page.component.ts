import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  countriesService = inject(CountriesService);
  countries: Country[] = [];

  searchByCountry(term: string) {
    this.countriesService.searchCountry(term).subscribe((country) => {
      this.countries = country;
    });
  }
}

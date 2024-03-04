import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  countriesService = inject(CountriesService);
  countries: Country[] = [];

  searchByCapital(term: string) {
    this.countriesService.searchCapital(term).subscribe((country) => {
      this.countries = country;
    });
  }
}

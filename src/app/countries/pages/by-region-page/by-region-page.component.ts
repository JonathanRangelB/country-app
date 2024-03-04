import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  countriesService = inject(CountriesService);
  countries: Country[] = [];

  searchByRegion(term: string) {
    this.countriesService.searchRegion(term).subscribe((country) => {
      this.countries = country;
    });
  }
}

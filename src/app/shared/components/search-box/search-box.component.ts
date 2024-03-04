import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input() placeholder: string = 'Search...';

  @Output()
  onValue = new EventEmitter<string>();

  emmitSearchTerm(term: string) {
    this.onValue.emit(term);
  }
}

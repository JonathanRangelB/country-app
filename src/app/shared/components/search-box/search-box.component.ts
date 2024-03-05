import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = 'Search...';
  @Input() initialValue!: string;

  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>();

  private debouncer = new Subject<string>();
  private subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.debouncer
      .pipe(debounceTime(600))
      .subscribe((value) => this.onDebounce.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  emmitSearchTerm(term: string) {
    this.onValue.emit(term);
  }

  onKeyPress(term: string) {
    this.debouncer.next(term);
  }
}

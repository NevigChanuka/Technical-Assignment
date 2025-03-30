import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private bookSubject = new Subject<Book>();
  private actionSubject = new Subject<void>();;
  
  action$ = this.actionSubject.asObservable();
  bookSelect$ = this.bookSubject.asObservable();

  sendBook(book: Book) {
    this.bookSubject.next(book);
  }
  refreshTable() {
    this.actionSubject.next();
  }
}

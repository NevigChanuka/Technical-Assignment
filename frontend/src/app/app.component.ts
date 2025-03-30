
import { Component } from '@angular/core';
import {BookFormComponent} from './book-form/book-form.component';
import {BookListComponent} from './book-list/book-list.component';


@Component({
  selector: 'app-root',
  imports: [BookFormComponent, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}

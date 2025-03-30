import { Book, BookService } from './../services/book.service';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-book-form',
  imports: [FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
 
  
  books: Book[] = [];
  book: Book = {id:'', title: '', author: '', publicationDate: ''};
  


  constructor(private bookService: BookService,
              private sharedService: SharedService) {}


  addBook() {
    delete this.book.id;
    this.bookService.addBook(this.book).subscribe({
      next: (response) => {
        console.log('Book added:', response);
        this.book = {id:'', title: '', author: '', publicationDate: '' };  // Reset the form
        this.sharedService.refreshTable(); 
      },
      error: (error) => {
        console.error('Error adding book:', error);
      }
    });
  }


  ngOnInit() {
      this.sharedService.bookSelect$.subscribe((book) => {
      this.book.id = book.id; 
      this.book.title = book.title;
      this.book.author = book.author;
      this.book.publicationDate = book.publicationDate.toString().split('T')[0]; 
    });
  }


  updateBook() {
    this.bookService.updateBook(this.book).subscribe({
      next: () => {
        this.sharedService.refreshTable(); 
        this.book = {id:'', title: '', author: '', publicationDate: ''}; // Reset the form
      },
      error: (error) => {
        console.error('Error updating book:', error);
      }
    });
  }
}


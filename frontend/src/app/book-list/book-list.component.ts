import { Component } from '@angular/core';
import { Book, BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent {

  books: Book[] = [];
  displayedColumns: string[] = ['title', 'author', 'publicationDate'];

  constructor(private bookService: BookService,
              private sharedService: SharedService) {}

  loadBooks() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  ngOnInit(): void {
    this.loadBooks();
    this.sharedService.action$.subscribe(() => {
      this.loadBooks();
       console.log('Book list updated!');
    });
  }

  updateBook(book: Book) {
    this.sharedService.sendBook(book); 
    
  }
  
  deleteBook(book: Book) {
    this.bookService.deleteBook(Number(book.id)).subscribe({
      next: () => {
          this.loadBooks();
      },
      error: (error) => {
          console.error('Error deleting book:', error);
      }
    });
  }
  


}

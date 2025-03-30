import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Book {
  id?: string;
  title: string;
  author: string;
  publicationDate: string;
}

@Injectable({
  providedIn: 'root'
})

export class BookService {
  
  private apiUrl = 'http://localhost:5259/api/book';

  constructor(private http: HttpClient) {}
  
  // Methods to get books from the API
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // Method to add a single book by ID
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  // Method to update a single book by ID
  updateBook(book: Book): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${book.id}`, book);
  }

  // Method to delete a single book by ID
  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

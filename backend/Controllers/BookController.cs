using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using backend.Models;

namespace backend.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BookController : Controller
    {
       private static List<Book> books = new List<Book>();

        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetBooks()
        {
            return books;
        }

        [HttpGet("{id}")]
        public ActionResult<Book> GetBook(int id)
        {
            var book = books.FirstOrDefault(b => b.Id == id);
            if (book == null) return NotFound();
            return book;
        }

        [HttpPost]
        public ActionResult<Book> AddBook(Book book)
        {
            book.Id = books.Count + 1;
            books.Add(book);
            return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, Book updatedBook)
        {
            var book = books.FirstOrDefault(b => b.Id == id);
            if (book == null) return NotFound();

            book.Title = updatedBook.Title;
            book.Author = updatedBook.Author;
            book.PublicationDate = updatedBook.PublicationDate;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = books.FirstOrDefault(b => b.Id == id);
            if (book == null) return NotFound();

            books.Remove(book);
            return NoContent();
        }





    }
}
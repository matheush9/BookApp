using BookApp.Data;
using BookApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookContext _bookContext;

        public BookController(BookContext bookContext)
        {
            _bookContext = bookContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetBooks()  
        {
            var books = await _bookContext.Books.ToListAsync();
            return Ok(books);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetBook([FromRoute] int id)
        {
            var book = await _bookContext.Books.FirstOrDefaultAsync(x => x.Id == id);

            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] Book bookRequest)
        {

            await _bookContext.Books.AddAsync(bookRequest);
            await _bookContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> EditBook([FromRoute] int id, Book request)
        {
            var book = await _bookContext.Books.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            book.Author = request.Author;
            book.Description = request.Description;
            book.Language = request.Language;
            book.Title = request.Title;
            book.TotalPages = request.TotalPages;
            book.PublicationDate = request.PublicationDate;
            book.Publisher = request.Publisher;

            await _bookContext.SaveChangesAsync();

            return Ok(book);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteBook([FromRoute] int id) 
        {
            var book = await _bookContext.Books.FindAsync(id);

            if (book == null)
                return NotFound();

            _bookContext.Books.Remove(book);
            await _bookContext.SaveChangesAsync();

            var books = await _bookContext.Books.ToListAsync();

            return Ok();
        }

    }
}

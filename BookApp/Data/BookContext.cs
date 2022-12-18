using BookApp.Models;
using Microsoft.EntityFrameworkCore;

namespace BookApp.Data
{
    public class BookContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
    }
}

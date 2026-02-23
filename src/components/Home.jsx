import { useState } from "react";
import { products } from "../data";
import BookCard from "./BookCardUI";
import { FaSearch } from "react-icons/fa";

function Home({ wishlist, toggleWishlist, addToCart }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [search, setSearch] = useState("");

  // Filter berdasarkan judul
  const filteredProducts = products.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Selamat Datang di BukaBuku
        </h1>
        <p className="text-gray-500 italic">
          Temukan jendela dunia dalam setiap halaman.
        </p>
      </header>

      {/* SEARCH BAR */}
      <div className="mb-12 max-w-xl mx-auto relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Cari buku berdasarkan judul..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-12 py-3 rounded-xl border
                     focus:outline-none focus:ring-2
                     focus:ring-[#fb7589] transition"
        />

        {/* CLEAR BUTTON */}
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 
                       text-gray-400 hover:text-gray-700 text-lg"
          >
            ✕
          </button>
        )}
      </div>

      {/* LIST PRODUK */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
              onReadMore={setSelectedBook}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Buku tidak ditemukan.
        </p>
      )}

      {/* MODAL */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative">

            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">
              {selectedBook.title}
            </h2>

            <p className="text-sm text-gray-400 italic mb-4">
              Oleh {selectedBook.author}
            </p>

            <p className="text-gray-600 leading-relaxed text-justify indent-6">
              {selectedBook.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
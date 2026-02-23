import { products } from "../data";
import BookCard from "./BookCardUI"

function Wishlist({ wishlist, toggleWishlist, addToCart }) {
  const wishlistBooks = products.filter((book) =>
    wishlist.includes(book.id)
  );

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Wishlist Kamu
      </h1>

      {wishlistBooks.length === 0 ? (
        <p className="text-gray-500">Belum ada buku yang di-like.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlistBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
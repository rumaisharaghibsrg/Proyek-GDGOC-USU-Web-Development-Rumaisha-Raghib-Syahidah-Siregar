import { FaHeart, FaRegHeart } from "react-icons/fa";

function BookCardUI({
  book,
  wishlist,
  toggleWishlist,
  addToCart,
  onReadMore,
  showToast,
}) {
  const handleWishlist = () => {
    toggleWishlist(book.id);
    showToast("Wishlist diperbarui ❤️");
  };

  const handleCart = () => {
    addToCart(book);
    showToast("Buku berhasil ditambahkan ke keranjang 🛒");
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100
                    overflow-hidden flex flex-col group
                    hover:shadow-xl hover:-translate-y-1
                    transition-all duration-300">

      <div className="relative aspect-[3/4] bg-pink-50 flex items-center justify-center p-6">
        <img
          src={book.image}
          alt={book.title}
          className="h-full object-contain rounded-2xl shadow-lg
                     transition-transform duration-500
                     group-hover:scale-105"
        />

        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full
                        text-[11px] font-semibold text-gray-500 shadow-sm">
          {book.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {book.title}
        </h3>

        <p className="text-sm text-gray-400 mb-3 italic">
          Oleh {book.author}
        </p>

        <p className="text-sm text-gray-500 mb-4 flex-grow">
          {book.description?.slice(0, 80)}...
        </p>

        {onReadMore && (
          <button
            onClick={() => onReadMore(book)}
            className="text-sm text-[#FFB6C1] font-semibold mb-4 hover:underline cursor-pointer"
          >
            Baca Selengkapnya
          </button>
        )}

        <button
          onClick={handleCart}
          className="w-full bg-[#FFB6C1] text-white py-2 rounded-xl
                     font-semibold
                     transition-all duration-300
                     hover:scale-105 hover:shadow-lg
                     active:scale-95
                     cursor-pointer mb-4"
        >
          Tambah ke Keranjang
        </button>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-lg font-black text-gray-800">
            Rp {book.price.toLocaleString("id-ID")}
          </span>

          <button
            onClick={handleWishlist}
            className="w-10 h-10 rounded-2xl flex justify-center items-center
                       border border-pink-200
                       transition-all duration-300
                       hover:scale-110 hover:shadow-md
                       active:scale-90
                       cursor-pointer"
          >
            {wishlist.includes(book.id) ? (
              <FaHeart className="text-red-500 text-lg transition-transform duration-300 scale-110" />
            ) : (
              <FaRegHeart className="text-gray-300 text-lg transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCardUI;
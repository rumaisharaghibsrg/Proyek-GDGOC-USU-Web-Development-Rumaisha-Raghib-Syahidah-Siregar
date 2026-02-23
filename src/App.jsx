import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Riwayat from "./components/Riwayat";
import Toast from "./components/Toast";

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [toast, setToast] = useState(null);

  // =====================
  // TOAST FUNCTION
  // =====================
  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  // =====================
  // WISHLIST
  // =====================
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
      showToast("Dihapus dari wishlist");
    } else {
      setWishlist([...wishlist, id]);
      showToast("Ditambahkan ke wishlist");
    }
  };

  // =====================
  // CART
  // =====================
  const addToCart = (book) => {
    const existing = cart.find((item) => item.id === book.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }

    showToast("Buku masuk ke keranjang");
  };

  const updateQuantity = (id, amount) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const checkout = (selectedItems) => {
    if (selectedItems.length === 0) return;

    const total = selectedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = {
      id: Date.now(),
      items: selectedItems,
      total,
      date: new Date(),
    };

    setOrders([...orders, newOrder]);

    setCart(cart.filter(
      (item) => !selectedItems.some((s) => s.id === item.id)
    ));

    showToast("Checkout berhasil");
  };

  return (
    /* PERBAIKAN: Menggunakan HashRouter (tidak butuh basename) */
    <Router>
      <div className="min-h-screen bg-[#FFF0F2] text-gray-800">

        {/* TOAST */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}

        <Navbar wishlistCount={wishlist.length} cartCount={cart.length} />

        <div className="container mx-auto px-6 py-10">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  addToCart={addToCart}
                  showToast={showToast}
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  addToCart={addToCart}
                  showToast={showToast}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  updateQuantity={updateQuantity}
                  checkout={checkout}
                />
              }
            />
            <Route path="/riwayat" element={<Riwayat orders={orders} />} />
            
            {/* JIKA RUTE TIDAK DITEMUKAN, PAKSA KE HOME */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>

      {/* FOOTER INLINE */}
      <div className="text-center py-6 text-gray-500 text-sm bg-[#FFF0F2]">
        &copy; {new Date().getFullYear()} BukaBuku. All rights reserved.
      </div>
    </Router>
  );
}

export default App;
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Cart({ cart, updateQuantity, checkout }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const removeItem = (id) => {
    updateQuantity(id, -9999);
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  // ✅ total selalu mengikuti cart terbaru
  const total = cart
    .filter((item) => selectedIds.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

      {/* LIST PRODUK */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Keranjang</h1>

        {cart.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <p className="text-gray-500">Keranjang masih kosong.</p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-sm flex gap-6 items-center hover:shadow-md transition"
            >
              {/* CHECKBOX */}
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
                className="w-5 h-5 accent-pink-500 cursor-pointer"
              />

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-32 object-contain rounded-lg"
              />

              {/* DETAIL */}
              <div className="flex-grow">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full bg-pink-100
                               hover:bg-[#fb7589] hover:text-white
                               transition font-bold cursor-pointer"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full bg-pink-100
                               hover:bg-[#fb7589] hover:text-white
                               transition font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* SUBTOTAL */}
              <div className="font-bold text-lg">
                Rp {(item.price * item.quantity).toLocaleString("id-ID")}
              </div>

              {/* DELETE */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-red-500 transition cursor-pointer"
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* RINGKASAN */}
      {cart.length > 0 && (
        <div className="bg-white p-6 rounded-2xl shadow-md h-fit sticky top-24">
          <h2 className="text-xl font-bold mb-6">
            Ringkasan Belanja
          </h2>

          <div className="flex justify-between mb-4">
            <span>Total Dipilih</span>
            <span className="font-bold text-lg">
              Rp {total.toLocaleString("id-ID")}
            </span>
          </div>

          <button
            onClick={() =>
              checkout(
                cart.filter((item) =>
                  selectedIds.includes(item.id)
                )
              )
            }
            disabled={selectedIds.length === 0}
            className={`w-full py-3 rounded-xl font-semibold transition cursor-pointer
              ${selectedIds.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#fb7589] text-white hover:scale-105"}`}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
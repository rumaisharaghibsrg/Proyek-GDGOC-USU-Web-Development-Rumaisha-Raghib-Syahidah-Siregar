import { FaReceipt } from "react-icons/fa";

function Riwayat({ orders }) {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">
        Riwayat Belanja
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white p-10 rounded-2xl shadow text-center">
          <p className="text-gray-500">
            Belum ada transaksi.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <FaReceipt className="text-[#fb7589]" />
                  <div>
                    <p className="font-semibold">
                      Pesanan #{index + 1}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full font-medium">
                  Selesai
                </span>
              </div>

              {/* ITEMS */}
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-20 object-contain rounded"
                      />
                      <div>
                        <p className="font-medium">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.quantity} x Rp{" "}
                          {item.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>

                    <div className="font-semibold">
                      Rp{" "}
                      {(item.price * item.quantity).toLocaleString("id-ID")}
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="flex justify-end mt-6">
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Total Pembayaran
                  </p>
                  <p className="text-xl font-bold text-[#fb7589]">
                    Rp {order.total.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Riwayat;
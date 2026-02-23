import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import bukabuku from "../assets/bukabuku.png";

function Navbar({ wishlistCount, cartCount }) {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-pink-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={bukabuku}
            alt="Logo Buka Buku"
            className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-2xl font-extrabold tracking-tight text-gray-800">
            Buka<span className="text-[#FFB6C1]">Buku</span>
          </span>
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-8 text-sm font-semibold">

          {/* KATALOG */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-[#FFB6C1]"
                  : "text-gray-600 hover:text-[#FFB6C1]"
              }`
            }
          >
            Katalog
          </NavLink>

          {/* WISHLIST */}
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `relative flex items-center gap-2 transition ${
                isActive
                  ? "text-[#FFB6C1]"
                  : "text-gray-600 hover:text-[#FFB6C1]"
              }`
            }
          >
            <FaHeart className="text-lg" />
            <span>Wishlist</span>

            {wishlistCount > 0 && (
              <span
                className="absolute -top-2 -right-4
                           bg-[#FFB6C1] text-white text-[11px]
                           font-bold px-2 py-0.5 rounded-full shadow-sm"
              >
                {wishlistCount}
              </span>
            )}
          </NavLink>

          {/* CART */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-2 transition ${
                isActive
                  ? "text-[#FFB6C1]"
                  : "text-gray-600 hover:text-[#FFB6C1]"
              }`
            }
          >
            <FaShoppingCart className="text-lg" />
            <span>Keranjang</span>

            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-4
                           bg-[#ff7488] text-white text-[11px]
                           font-bold px-2 py-0.5 rounded-full shadow-sm"
              >
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* RIWAYAT */}
          <NavLink
            to="/riwayat"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-[#FFB6C1]"
                  : "text-gray-600 hover:text-[#FFB6C1]"
              }`
            }
          >
            Riwayat
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
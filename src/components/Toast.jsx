import { useEffect } from "react";

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-6 right-6 z-[9999]
              px-6 py-4 rounded-xl shadow-xl
              text-white font-medium
              transition-all duration-300
              animate-slideIn
              ${type === "success" ? "bg-green-500" : "bg-pink-500"}`}
    >
      {message}
    </div>
  );
}

export default Toast;
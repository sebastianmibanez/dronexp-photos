import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(sessionStorage.getItem("cart") || "[]"));
  }, []);

  const removeFromCart = (id) => {
    const updated = cart.filter((p) => p.id !== id);
    setCart(updated);
    sessionStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((acc, p) => acc + p.precio, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-gray-950 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-400 mb-6">Agregá fotos desde las galerías de eventos</p>
        <Link to="/" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg">
          Ver galerías
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Tu carrito</h1>

        <div className="space-y-4">
          {cart.map((photo) => (
            <div key={photo.id} className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
              <img src={photo.urlThumbnail} alt="" className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <p className="font-semibold text-white">Foto #{photo.id}</p>
                <p className="text-sm text-gray-400">${photo.precio.toLocaleString("es-CL")} CLP</p>
              </div>
              <button className="text-gray-400 hover:text-red-400 text-xl" onClick={() => removeFromCart(photo.id)}>✕</button>
            </div>
          ))}
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-white">Total:</span>
          <span className="text-xl font-bold text-white">${total.toLocaleString("es-CL")} CLP</span>
        </div>

        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-lg text-lg transition-colors">
          Pagar con Mercadopago
        </button>
        <p className="text-center text-sm text-gray-500 mt-3">Recibirás un link de descarga por email</p>
      </div>
    </div>
  );
}

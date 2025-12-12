// src/components/Cart.jsx
import React from "react";
import PaymentPopup from "./PaymentPopup";
import  { useState } from "react";

const Cart = ({ cartItems }) => {

    const [showPopup, setShowPopup] = useState(false);

    const handlePayment = () => {
        setShowPopup(true);
    };
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );


    return (
        <div className="rounded-xl h-auto shadow-md p-6">
            <h2 className="font-bold text-lg text-orange-600">
                Your Cart ({cartItems.length})
            </h2>
            {cartItems.length === 0 ? (
                <div className="text-gray-400 text-sm mt-4">
                    <img
                        src="/images/cart.png"
                        alt="cart"
                        className="w-24 mx-auto mb-2"
                    />
                    Your added items will appear here
                </div>
            ) : (
                <>
                    <ul className="mt-4 space-y-2">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="text-sm text-gray-700 flex justify-between"
                            >
                                <span>
                                    {item.name} (x{item.quantity})
                                </span>
                                <span>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="text-right font-bold mt-4 mb-10">
                        Total: ${totalPrice.toFixed(2)}
                    </div>
                </>
            )}

            <div>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mt-4">
                    <div>
                        <img src="/public/icon-carbon-neutral.svg" alt="" />
                    </div>
                    <h6 className="text-gray-400">
                        This is a{" "}
                        <span className="font-semibold text-gray-600">
                            carbon neutral
                        </span>{" "}
                        delivery
                    </h6>
                </div>
                <div className="text-center">
                    <button
                        onClick={handlePayment}
                        className="bg-orange-700 text-white py-2 px-20 rounded-full mt-4 "
                    >
                        Confirm Order
                    </button>

                    <div className="p-8">
                        <PaymentPopup
                            show={showPopup}
                            onClose={() => setShowPopup(false)}
                            cartItems={cartItems}
                            totalPrice={totalPrice}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

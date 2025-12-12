import React from "react";

const PaymentPopup = ({ show, onClose, cartItems, totalPrice }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-96 shadow-xl text-center">
                <h2 className="text-lg font-semibold text-green-600 mb-2">
                    🎉 Your payment is done!
                </h2>
                <p className="text-gray-700 mb-4">Thank you for your order</p>

                <div className="space-y-3 max-h-60 overflow-y-auto">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div className="text-left">
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">
                                    Qty: {item.quantity} × ${item.price} ={" "}
                                    <b>
                                        $
                                        {(item.quantity * item.price).toFixed(
                                            2
                                        )}
                                    </b>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 font-semibold text-right text-lg">
                    Total: ${totalPrice.toFixed(2)}
                </div>

                <button
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PaymentPopup;

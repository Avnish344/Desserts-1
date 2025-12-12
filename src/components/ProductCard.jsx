// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({
    product,
    quantity,
    onAddToCart,
    onIncrement,
    onDecrement,
}) => {
    return (
        <div className="rounded-sm overflow-hidden h-auto transition bg-transparent">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover ms:w-[280px] rounded-sm "
            />
            <div className="p-4  relative bg-transparent">
                <p className="text-xs text-gray-500 leading-tight-5">{product.type}</p>
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <p className="text-red-600 text-sm font-medium relative">
                    ${product.price.toFixed(2)}
                </p>

                {quantity === 0 ? (
                    <button
                        onClick={() => onAddToCart(product)}
                        className="text-sm flex items-center justify-center gap-2 px-4 py-2 border bg-white font-semibold border-gray-300 rounded-full hover:bg-orange-100 transition absolute ml-[10vh] mt-[-13vh]"
                    >
                        <img src="/public/icon-add-to-cart.svg" alt="" />
                        Add to Cart
                    </button>
                ) : (
                    <div className="flex items-center gap-5 text-white absolute ml-[10vh] mt-[-13vh] bg-orange-500 rounded-full border border-gray-300 px-4 py-1 ">
                        <button
                            onClick={() => onDecrement(product.id)}
                            className="text-sm font-bold w-[20px] ring-1 ring-white rounded-full bg-orange-400  hover:bg-white hover:text-orange-500"
                        >
                            -
                        </button>
                        <span className="text-sm font-semibold">
                            {quantity}
                        </span>
                        <button
                            onClick={() => onIncrement(product.id)}
                            className="text-sm font-semibold w-[20px] ring-1 ring-white rounded-full hover:bg-white hover:text-orange-500"
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;

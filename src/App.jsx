// src/App.jsx
import React, { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const handleIncrement = (productId) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const handleDecrement = (productId) => {
        setCartItems(
            cartItems
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    return (
        <div className="min-h-screen bg-[#fef9f6] p-8">
            <h1 className="text-3xl font-bold mb-6">Desserts</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => {
                        const itemInCart = cartItems.find((item) => item.id === product.id);
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                                quantity={itemInCart ? itemInCart.quantity : 0}
                                onAddToCart={handleAddToCart}
                                onIncrement={handleIncrement}
                                onDecrement={handleDecrement}
                            />
                        );
                    })}
                </div>
                <Cart cartItems={cartItems} />
            </div>
        </div>
    );
};

export default App;

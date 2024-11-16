import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set, get) => ({
            cartItems: [],
            selectedCompany: '',

            addItemToCart: (item) => {
                const itemExists = get().cartItems.find(
                    (cartItem) => cartItem.id === item.id
                );

                if (itemExists) {
                    if (typeof itemExists.quantity === "number") {
                        itemExists.quantity++;
                    }

                    set({
                        cartItems: [...get().cartItems],
                    });
                } else {
                    set({
                        cartItems: [...get().cartItems, { ...item, quantity: 1 }],
                    });
                }

            },

            removeItemFromCart: (productId) => {
                const itemExists = get().cartItems.find(
                    (cartItem) => cartItem.id === productId
                );

                if (itemExists) {
                    if (itemExists.quantity) {
                        if (itemExists.quantity === 1) {
                            const updatedCartItems = get().cartItems.filter(
                                (item) => item.id !== productId
                            );
                            set({ cartItems: updatedCartItems });
                        } else {
                            itemExists.quantity--;
                            set({ cartItems: [...get().cartItems] });
                        }
                    }
                }
            },

            clearCart: () => {
                set({ cartItems: [] });
            },

            setSelectedCompany: (company) => {
                set({ selectedCompany: company });
            },

        }),
        {
            name: "cart-items",
        }
    )
);
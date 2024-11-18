import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavStore = create(
    persist(
        (set, get) => ({
            favItems: [],
            addFav: (product) =>
                set((state) => {
                    const existingProduct = state.favItems.find((item) => item.id === product.id);
                    if (existingProduct) {
                        return state;
                    }
                    const newProduct = { ...product, isFav: true };
                    return {
                        favItems: [...state.favItems, newProduct],
                    };
                }),

            removeFav: (id) =>
                set((state) => ({
                    favItems: state.favItems.filter((item) => item.id !== id),
                })),
            clearList: () => {
                set({ favItems: [] });
            },
        }),
        {
            name: "fav-items",
        }
    )
);
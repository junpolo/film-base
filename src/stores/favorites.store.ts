import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MovieDetailsReponse, MovieItem } from "../types";

interface FavoritesStoreState {
  favorites: MovieDetailsReponse[] | MovieItem[];
  updateFavorites: (movie: MovieDetailsReponse | MovieItem) => void;
  isFavorite: (movieId: MovieDetailsReponse["imdbID"]) => boolean;
}

const initialValues: Pick<FavoritesStoreState, "favorites"> = {
  favorites: [],
};

const useFavoritesStore = create<FavoritesStoreState>()(
  persist(
    (set, get) => ({
      ...initialValues,

      updateFavorites: (movie: MovieDetailsReponse | MovieItem) =>
        set((state) => {
          const doesExists = state.favorites.some(
            (item) => item.imdbID === movie.imdbID
          );

          if (doesExists) {
            return {
              favorites: state.favorites.filter(
                (item) => item.imdbID !== movie.imdbID
              ),
            };
          }

          return { favorites: [...state.favorites, movie] };
        }),
      isFavorite: (movieId: MovieDetailsReponse["imdbID"]) => {
        const favorites = get().favorites;
        return favorites.some((item) => item.imdbID === movieId);
      },
    }),
    {
      name: "favorites-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export const useFavorites = () => useFavoritesStore((state) => state.favorites);
export const useUpdateFavorites = () =>
  useFavoritesStore((state) => state.updateFavorites);

export const useIsFavorite = (movieId: string) =>
  useFavoritesStore((state) =>
    state.favorites.some((item) => item.imdbID === movieId)
  );

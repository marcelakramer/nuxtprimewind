import type { Song } from "~/interfaces/song";

export const useFavoriteStore = defineStore("favorites", {
    state: () => {
        return {
            favorites : [] as Song[]
        }
    },
    actions: {
        addFavorite(song: Song) {
            this.favorites.push(song);
        },
        removeFavorite(song: Song) {
            this.favorites = this.favorites.filter((s) => s.id !== song.id);
        },
        isFavorite(song: Song) {
            return this.favorites.find((s) => s.id === song.id) !== undefined;
        }
    },
    persist: {
        storage: persistedState.localStorage
    }
});
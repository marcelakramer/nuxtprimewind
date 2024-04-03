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
            this.favorites = this.favorites.filter((s) => s !== song);
        },
        isFavorite(song: Song) {
            return this.favorites.includes(song);
        }
    }
})

import type { Song } from "~/interfaces/song";

export const useSongStore = defineStore("songs", {
    state: () => {
        return {
            songs: [] as Song[],
        }
    },
    actions: {
        addSong(song: Song): boolean {
            if (this.songs.find((s) => s.title === song.title && s.album === song.album && s.artist === song.artist) === undefined) {
                song.id = this.getNewId();
                this.songs.unshift(song);
                return true
            }
            return false
        },
        deleteSong(song: Song) {
            this.songs = this.songs.filter((s) => s.id !== song.id);
        },
        getNewId() {
            let id = '1';
            while (this.songs.find(s => s.id === id) !== undefined) {
                id = (+id + 1).toString();
            }
            return id;
        }
    },
    persist: {
        storage: persistedState.localStorage
    }
})
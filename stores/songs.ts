import type { Song } from "~/interfaces/song";

export const useSongStore = defineStore("songs", {
    state: () => {
        return {
            songs: [
                {
                    "id": "1",
                    "title": "Shake It Off",
                    "artist": "Taylor Swift",
                    "album": "1989",
                    "duration": "3:39",
                    "year": "2014"
                },
                {
                    "id": "2",
                    "title": "Thank U, Next",
                    "artist": "Ariana Grande",
                    "album": "Thank U, Next",
                    "duration": "3:27",
                    "year": "2019"
                },
                {
                    "id": "3",
                    "title": "drivers license",
                    "artist": "Olivia Rodrigo",
                    "album": "SOUR",
                    "duration": "4:02",
                    "year": "2021"
                },
                {
                    "id": "4",
                    "title": "Skin",
                    "artist": "Sabrina Carpenter",
                    "album": "Skin - Single",
                    "duration": "3:15",
                    "year": "2021"
                },
                {
                    "id": "5",
                    "title": "Love Story",
                    "artist": "Taylor Swift",
                    "album": "Fearless",
                    "duration": "3:55",
                    "year": "2008"
                },
                {
                    "id": "6",
                    "title": "7 Rings",
                    "artist": "Ariana Grande",
                    "album": "Thank U, Next",
                    "duration": "2:58",
                    "year": "2019"
                },
                {
                    "id": "7",
                    "title": "good 4 u",
                    "artist": "Olivia Rodrigo",
                    "album": "SOUR",
                    "duration": "2:58",
                    "year": "2021"
                },
                {
                    "id": "8",
                    "title": "Skinny Dipping",
                    "artist": "Sabrina Carpenter",
                    "album": "Singular: Act II",
                    "duration": "3:08",
                    "year": "2019"
                }
              ] as Song[]
        }
    },
    actions: {
        addSong(song: Song) {
            this.songs.unshift(song);
        },
        deleteSong(song: Song) {
            this.songs = this.songs.filter((s) => s !== song);
        },
    }
})

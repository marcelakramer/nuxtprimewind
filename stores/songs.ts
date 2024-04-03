import type { Song } from "~/interfaces/song";

export const useSongStore = defineStore("songs", {
    state: () => {
        return {
            songs: [
                {
                    "id": 1,
                    "name": "Shake It Off",
                    "duration": "3:39",
                    "artist": "Taylor Swift",
                    "album": "1989",
                    "year": 2014
                },
                {
                    "id": 2,
                    "name": "Thank U, Next",
                    "duration": "3:27",
                    "artist": "Ariana Grande",
                    "album": "Thank U, Next",
                    "year": 2019
                },
                {
                    "id": 3,
                    "name": "drivers license",
                    "duration": "4:02",
                    "artist": "Olivia Rodrigo",
                    "album": "SOUR",
                    "year": 2021
                },
                {
                    "id": 4,
                    "name": "Skin",
                    "duration": "3:15",
                    "artist": "Sabrina Carpenter",
                    "album": "Skin - Single",
                    "year": 2021
                },
                {
                    "id": 5,
                    "name": "Love Story",
                    "duration": "3:55",
                    "artist": "Taylor Swift",
                    "album": "Fearless",
                    "year": 2008
                },
                {
                    "id": 6,
                    "name": "7 Rings",
                    "duration": "2:58",
                    "artist": "Ariana Grande",
                    "album": "Thank U, Next",
                    "year": 2019
                },
                {
                    "id": 7,
                    "name": "good 4 u",
                    "duration": "2:58",
                    "artist": "Olivia Rodrigo",
                    "album": "SOUR",
                    "year": 2021
                },
                {
                    "id": 8,
                    "name": "Skinny Dipping",
                    "duration": "3:08",
                    "artist": "Sabrina Carpenter",
                    "album": "Singular: Act II",
                    "year": 2019
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

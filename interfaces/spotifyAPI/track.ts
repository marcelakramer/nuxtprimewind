export interface Track {
    name: string;
    artists: { name: string }[];
    album: {
      name: string;
      release_date: string;
      images: { url: string }[];
    };
    duration_ms: number;
  }
export interface Track {
    name: string;
    artists: { 
      name: string;
      external_urls: {spotify: string}; 
    }[];
    album: {
      name: string;
      release_date: string;
      images: { url: string }[];
      external_urls: {spotify: string};
    };
    duration_ms: number;
    external_urls: {spotify: string};
}
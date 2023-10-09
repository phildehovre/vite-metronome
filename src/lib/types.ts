export type Song = {
    song_id: string;
    song_title: string;
    song_uri: string;
    tempo: string;
    artist: {
      id: string;
      name: string;
      uri: string;
      img: string;
      genres: string[];
      from: string;
      mbid: string;
    };
    album: {
      title: string;
      uri: string;
      img: string;
      year: string;
    };
  };
  
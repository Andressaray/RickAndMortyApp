export interface ResponseEpisodes {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Episodes[];
}

export interface Episodes {
  id: number;
  name: string;
  air_date: string;
  creted: string;
  url: string;
  episode: string;
  characters: string[];
}

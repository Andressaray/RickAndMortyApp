export interface ResponseCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  status: "unknown" | "Alive" | "Dead";
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

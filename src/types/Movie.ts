export interface Movie {
  id: string;
  title: string;
  year: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  poster: string;
  video: string;
  description: string;
  genres: string[];
  duration: string;
  rating: number;
  Originaltitle: string;
  Country: string;
  Director: string;
  Cast: string;
  Audiotrack: string;
  Subtitles: string;
  type: 'movie' | 'cartoon';
  subtitles?: {
    chi?: string;
    kor?: string;
    en?: string;
    ru?: string;
    dual?: string;
  };
}

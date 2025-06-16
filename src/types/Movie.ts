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
  Agelimit: number;
  Director: string;
  Cast: string;
  Audiotrack: string;
  Subtitles: string;
  subtitles?: {
    en?: string;
    ru?: string;
    dual?: string;
  };
}

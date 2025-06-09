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
  subtitles?: {
    en?: string;
    ru?: string;
    dual?: string;
  };
}

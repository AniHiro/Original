export interface Movie {
  id: string;
  title: string;
  year: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  poster: string;
  video: string;
  subtitles?: {
    en?: string;
    ru?: string;
    dual?: string;
  }
}
 
import type { Movie } from '../types/Movie';

export const movies: Movie[] = [
  {
    id: 'avatar2',
    title: 'Avatar: The Way of Water',
    year: 2022,
    level: 'intermediate',
    poster: '../../public/poster/h280_51328746.jpg',
    video: '../../public/video/Avatar2.mp4',
    subtitles: {
      en: '../../public/subtitles/Avatar2-en.vtt',
      ru: '../../public/subtitles/Avatar2-ru.vtt',
      dual: '../../public/subtitles/Avatar2-dual.vtt',
    },
  },
];

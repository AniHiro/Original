import type { Movie } from '../types/Movie';

export const movies: Movie[] = [
  {
    id: 'avatar2',
    title: 'Avatar: The Way of Water',
    year: 2022,
    level: 'intermediate',
    poster: '../../public/poster/h280_51328746.jpg',
    video: '../../public/video/Avatar2.mp4',
    description: 'Джейк Салли живёт с новой семьёй на Пандоре. Но когда угроза возвращается, он должен защитить свой дом.',
    genres: ['Фантастика', 'Боевик', 'Приключения'],
    duration: '3ч 12м',
    rating: 8.2,
    Originaltitle: 'Avatar: The Way of Water',
    Country: "США",
    Agelimit: 12,
    Director: "Джеймс Кэмерон",
    Cast: "Сэм Уортингтон, Зои Салдана, Сигурни Уивер, Вин Дизель, Стивен Лэнг, Мишель Йео, Кейт Уинслет, Клифф Кёртис, Джоэль Мур, Дэвид Тьюлис, Уна Чаплин, Си Си Эйч Паундер, Иди Фалько, Брендан Коуэлл, Джемейн Клемент, Джэми Флэттерс, Бритен Далтон, Тринити Блисс, Джек Чемпион, Бэйли Басс",
    Audiotrack: 'ENG',
    Subtitles: 'Rus, Eng, Double',
    subtitles: {
      en: '../../public/subtitles/Avatar2-en.vtt',
      ru: '../../public/subtitles/Avatar2-ru.vtt',
      dual: '../../public/subtitles/Avatar2-dual.vtt'
    }
  },

];


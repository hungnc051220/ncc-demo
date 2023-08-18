export interface Category {
  href: string;
  label: string;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string[];
  duration: string;
  rating: Number;
}

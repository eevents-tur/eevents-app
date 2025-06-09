export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  category: string;
  featured?: boolean;
  description?: string;
  likes?: number;
  comments?: number;
  website?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface UnsplashAuthor {
  name: string;
}

export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  likes: number;
  user: UnsplashAuthor;
}

export interface FetchImagesResponse {
  results: UnsplashImage[];
  total_pages: number;
}

export interface ImageModalProps {
  currentImage: UnsplashImage | null;
  isOpen: boolean;
  onRequestClose: () => void;
  preventScroll: boolean;
}

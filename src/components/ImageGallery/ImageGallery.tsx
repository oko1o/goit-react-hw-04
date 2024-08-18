import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGallery, UnsplashImage } from '../types';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal }: ImageGallery) {
  return (
    <ul className={css.list}>
      {images.map((image: UnsplashImage) => (
        <li
          key={image.id}
          onClick={() => {
            openModal(image);
          }}
          className={css.listitem}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}

import React from 'react';
import { UnsplashImage } from '../types';
import css from './ImageCard.module.css';

interface ImageCardProps {
  image: UnsplashImage;
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <div className={css.imgcontainer}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.img}
      />
    </div>
  );
}

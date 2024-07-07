import css from './ImageCard.module.css';

export default function ImageCard({ image }) {
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

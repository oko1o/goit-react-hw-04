import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      Load More
    </button>
  );
}

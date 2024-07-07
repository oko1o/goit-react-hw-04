import { useEffect, useState } from 'react';
import { fetchImages } from '../unsplash-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import Modal from 'react-modal';
import css from './App.module.css';

Modal.setAppElement('#root');

export default function App() {
  const [currentImage, setCurrentImage] = useState('');
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;
    async function getImages() {
      try {
        setLoader(true);
        setError(false);
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleSubmit = (query) => {
    setImages([]);
    setPage(1);
    setQuery(query);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const isVisibleBtnLoadMore = totalPages > page && images.length > 0;

  const openModal = (thisImage) => {
    setIsOpenModal(true);
    setCurrentImage(thisImage);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={css.content}>
      <SearchBar onSubmit={handleSubmit} />
      {error ? (
        <ErrorMessage />
      ) : (
        images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )
      )}
      {isVisibleBtnLoadMore && <LoadMoreBtn onClick={onLoadMore} />}
      {loader && <Loader />}
      {isOpenModal && (
        <ImageModal
          isOpen={isOpenModal}
          onRequestClose={closeModal}
          images={images}
          currentImage={currentImage}
          preventScroll={true}
        />
      )}
    </div>
  );
}

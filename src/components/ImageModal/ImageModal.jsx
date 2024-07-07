import Modal from 'react-modal';
import css from './ImageModal.module.css';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     transform: 'translate(-50%, -50%)',
//     padding: 0,
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.75)',
//   },
// };

export default function ImageModal({
  currentImage,
  isOpen,
  onRequestClose,
  preventScroll,
}) {
  console.log(currentImage);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      preventScroll={preventScroll}
      className={css.content}
      overlayClassName={css.overlay}
    >
      <img src={currentImage.urls.regular} alt="" />
      <p>{currentImage.description}</p>
      <p>Author: {currentImage.user.name}</p>
      <p>Likes: {currentImage.likes}</p>
    </Modal>
  );
}

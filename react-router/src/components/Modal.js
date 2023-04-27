import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleClick = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div>
      <div onClick={handleClick}></div>
      <div className="bg-white">
        <div>
          {children}
          <div>{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
